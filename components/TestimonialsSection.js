'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { StarIcon } from '@heroicons/react/24/solid';

/**
 * Testimonials Section Component
 * Customer reviews and testimonials
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Walton on Thames',
      rating: 5,
      text: 'Excellent service from start to finish. The team installed our EV charging point professionally and efficiently. Highly recommended!',
    },
    {
      name: 'James Peterson',
      location: 'Weybridge',
      rating: 5,
      text: 'Called them for an emergency electrical issue late at night. They arrived within the hour and fixed the problem quickly. Outstanding service!',
    },
    {
      name: 'Emma Richardson',
      location: 'Esher',
      rating: 5,
      text: 'Had our entire house rewired by Bring It Ohm. The work was completed on time, on budget, and to an exceptional standard. Very professional team.',
    },
    {
      name: 'David Thompson',
      location: 'Cobham',
      rating: 5,
      text: 'The Rako smart home system they installed has transformed our home. The lighting control is fantastic and the team explained everything clearly.',
    },
    {
      name: 'Lisa Anderson',
      location: 'Walton on Thames',
      rating: 5,
      text: 'Professional EICR testing and certification for our rental property. Thorough, efficient, and great communication throughout.',
    },
    {
      name: 'Michael Brown',
      location: 'Hersham',
      rating: 5,
      text: 'Fantastic lighting design for our new extension. They really understood our vision and delivered beyond expectations.',
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="testimonial-stars">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} style={{ width: '20px', height: '20px', display: 'inline' }} />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials">
      <Container>
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p className="lead text-secondary">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  {renderStars(testimonial.rating)}
                  <p className="mb-3">{testimonial.text}</p>
                  <div className="testimonial-author">
                    {testimonial.name}
                  </div>
                  <div className="text-muted small">
                    {testimonial.location}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <p className="lead">
            Join hundreds of satisfied customers across Surrey
          </p>
        </div>
      </Container>
    </section>
  );
}