'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

/**
 * Footer Component
 * Company info, quick links, and attribution
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <h3 className="footer-logo">Bring It Ohm</h3>
            <p className="mb-3">
              Professional electrical solutions for your home and business. Serving Surrey with excellence for over 15 years.
            </p>
            <div className="d-flex flex-column gap-2">
              <a href="tel:07885694524" className="d-flex align-items-center text-decoration-none">
                <PhoneIcon style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} />
                07885 694524
              </a>
              <a href="mailto:info@bringitohm.co.uk" className="d-flex align-items-center text-decoration-none">
                <EnvelopeIcon style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} />
                info@bringitohm.co.uk
              </a>
              <div className="d-flex align-items-start">
                <MapPinIcon style={{ width: '20px', height: '20px', marginRight: '0.5rem', marginTop: '2px' }} />
                <span>Walton on Thames, Surrey</span>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h4 className="h6 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-3">Our Services</h4>
            <ul className="list-unstyled">
              <li className="mb-2">Electrical Installations</li>
              <li className="mb-2">Emergency Services</li>
              <li className="mb-2">EV Charging Points</li>
              <li className="mb-2">Smart Home Automation</li>
              <li className="mb-2">EICR Testing</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h4 className="h6 mb-3">Business Hours</h4>
            <ul className="list-unstyled">
              <li className="mb-2">Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li className="mb-2">Saturday: 9:00 AM - 4:00 PM</li>
              <li className="mb-2">Sunday: Emergency Only</li>
              <li className="mb-2 fw-bold" style={{ color: 'var(--color-secondary)' }}>
                24/7 Emergency Service
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Bring It Ohm Electrical Solutions. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}