'use client';

import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

/**
 * Contact Section Component
 * Contact form and business information
 */
export default function ContactSection() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '07885 694524',
      link: 'tel:07885694524',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'info@bringitohm.co.uk',
      link: 'mailto:info@bringitohm.co.uk',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      content: 'Walton on Thames, Surrey',
      link: null,
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      content: '24/7 Emergency Service',
      link: null,
    },
  ];

  return (
    <section id="contact">
      <Container>
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p className="lead text-secondary">
            Ready to start your electrical project? Contact us today for a free quote
          </p>
        </div>

        <Row className="g-4 mb-5">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const content = info.link ? (
              <a href={info.link} className="text-decoration-none text-dark">
                {info.content}
              </a>
            ) : (
              info.content
            );

            return (
              <Col key={index} xs={12} sm={6} lg={3}>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <IconComponent style={{ width: '30px', height: '30px' }} />
                  </div>
                  <h3 className="h6 mb-2">{info.title}</h3>
                  <div>{content}</div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}