'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import { BoltIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid';

/**
 * Hero Section Component
 * Diagonal split layout with hero image and content
 */
export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title fade-in-up">
              Reliable Electrical Solutions for Your Home or Business
            </h1>
            <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
              Bring It Ohm - Serving the Surrey area with over 15 years of experience
            </p>
            
            <div className="d-flex flex-wrap gap-3 mb-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="primary" 
                size="lg" 
                href="#contact"
                className="btn-primary"
              >
                Get a Free Quote
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                href="tel:07885694524"
              >
                Call Us Today
              </Button>
            </div>

            <Row className="mt-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Col xs={12} md={4} className="mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <BoltIcon style={{ width: '32px', height: '32px', color: 'var(--color-secondary)', marginRight: '0.75rem' }} />
                  <div>
                    <div className="fw-bold" style={{ fontSize: '0.9rem' }}>15+ Years</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Experience</div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} className="mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <ShieldCheckIcon style={{ width: '32px', height: '32px', color: 'var(--color-secondary)', marginRight: '0.75rem' }} />
                  <div>
                    <div className="fw-bold" style={{ fontSize: '0.9rem' }}>Certified</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Electricians</div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="d-flex align-items-center">
                  <ClockIcon style={{ width: '32px', height: '32px', color: 'var(--color-secondary)', marginRight: '0.75rem' }} />
                  <div>
                    <div className="fw-bold" style={{ fontSize: '0.9rem' }}>24/7</div>
                    <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Emergency</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={6} className="d-none d-lg-block">
            <div className="position-relative" style={{ height: '500px' }}>
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzcxMzl8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmd8ZW58MHwwfHx8MTc2NDcxMDczOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional electrician at work"
                fill
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}