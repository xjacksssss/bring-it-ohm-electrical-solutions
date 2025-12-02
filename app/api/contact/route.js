import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Contact Form API Route
 * Handles form submissions and sends emails via SMTP
 * 
 * CRITICAL: Uses exact environment variable names required by deployment system:
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_USER
 * - SMTP_PASS
 * - CONTACT_EMAIL
 */

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map();

/**
 * Simple rate limiting check
 * Allows 3 submissions per IP per 15 minutes
 */
function checkRateLimit(identifier) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3;

  if (!rateLimitMap.has(identifier)) {
    rateLimitMap.set(identifier, []);
  }

  const requests = rateLimitMap.get(identifier);
  const recentRequests = requests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(identifier, recentRequests);
  return true;
}

/**
 * Validate form data
 */
function validateFormData(data) {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (!data.phone || !/^[\d\s+()-]+$/.test(data.phone)) {
    errors.push('Valid phone number is required');
  }

  if (!data.service) {
    errors.push('Service selection is required');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return errors;
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate form data
    const validationErrors = validateFormData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: validationErrors.join(', ') },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_EMAIL'];
    const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars.join(', '));
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us by phone.' },
        { status: 500 }
      );
    }

    // Create nodemailer transporter with EXACT environment variable names
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP verification failed:', error);
      return NextResponse.json(
        { error: 'Email service is temporarily unavailable. Please contact us by phone.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #53585F; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f8f8f8; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #53585F; }
    .value { margin-top: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Service Requested:</div>
        <div class="value">${service}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the Bring It Ohm Electrical Solutions contact form.</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us by phone.' },
      { status: 500 }
    );
  }
}