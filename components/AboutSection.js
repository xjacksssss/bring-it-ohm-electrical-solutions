'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

/**
 * About Section Component
 * Company background and experience
 */
export default function AboutSection() {
  const highlights = [
    'Over 15 years of industry experience',
    'Fully qualified and certified electricians',
    'Comprehensive insurance coverage',
    'Competitive pricing with no hidden costs',
    'Commitment to quality and safety',
    'Excellent customer service',
  ];

  return (
    <section id="about" className="bg-light-custom">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="position-relative" style={{ height: '500px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1581090698407-7d93959da202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVhbXxlbnwwfDB8fHwxNzY0NzEwNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Electrical engineering team"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>

          <Col lg={6}>
            <div className="ps-lg-4">
              <h2 className="mb-4">About Bring It Ohm Electrical Solutions</h2>
              <p className="lead mb-4">
                Bring It Ohm Electrical Solutions has been providing top-quality electrical services to the Surrey area for over 15 years.
              </p>
              <p className="mb-4">
                Our team of certified electricians are committed to delivering reliable and efficient solutions to meet all your electrical needs, from installations and upgrades to emergency repairs and smart home automation.
              </p>
              <p className="mb-4">
                Based in Walton on Thames, we serve residential and commercial clients throughout Surrey, building lasting relationships through quality workmanship and exceptional customer service.
              </p>

              <div className="mt-4">
                <h3 className="h5 mb-3">Why Choose Us?</h3>
                <Row>
                  {highlights.map((highlight, index) => (
                    <Col key={index} xs={12} md={6} className="mb-3">
                      <div className="d-flex align-items-start">
                        <CheckCircleIcon 
                          style={{ 
                            width: '24px', 
                            height: '24px', 
                            color: 'var(--color-secondary)',
                            marginRight: '0.75rem',
                            flexShrink: 0,
                            marginTop: '2px'
                          }} 
                        />
                        <span>{highlight}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}