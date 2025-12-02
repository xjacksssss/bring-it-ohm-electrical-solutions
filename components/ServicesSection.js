'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  BoltIcon, 
  WrenchScrewdriverIcon, 
  LightBulbIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

/**
 * Services Section Component
 * Grid layout showcasing all electrical services
 */
export default function ServicesSection() {
  const services = [
    {
      icon: BoltIcon,
      title: 'Electrical Installations & Upgrades',
      description: 'Professional installation and upgrade services for residential and commercial properties, ensuring safety and efficiency.',
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Emergency Electrician Services',
      description: '24/7 emergency response for urgent electrical issues. Fast, reliable service when you need it most.',
    },
    {
      icon: CpuChipIcon,
      title: 'EV Charging Point Installations',
      description: 'Expert installation of electric vehicle charging points for your home or business. Future-proof your property.',
    },
    {
      icon: LightBulbIcon,
      title: 'Lighting Design & Control Systems',
      description: 'Innovative lighting solutions with smart control systems to enhance ambiance and energy efficiency.',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Full & Partial Rewiring',
      description: 'Complete or partial rewiring services to bring your electrical system up to modern safety standards.',
    },
    {
      icon: HomeModernIcon,
      title: 'Rako Smart Home Automation',
      description: 'Transform your home with Rako smart automation systems for lighting, heating, and more.',
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'EICR Testing & Reporting',
      description: 'Comprehensive Electrical Installation Condition Reports to ensure your property meets safety regulations.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Inspection & Testing',
      description: 'Thorough electrical inspections and testing services to identify potential issues before they become problems.',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Electrical Issue Rectification',
      description: 'Expert diagnosis and repair of electrical faults with full certification upon completion.',
    },
  ];

  return (
    <section id="services" className="bg-light-custom">
      <Container>
        <div className="section-title">
          <h2>Our Services</h2>
          <p className="lead text-secondary">
            Comprehensive electrical solutions tailored to your needs
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Col key={index} xs={12} md={6} lg={4}>
                <Card className="service-card h-100">
                  <Card.Body>
                    <div className="service-icon mb-3">
                      <IconComponent style={{ width: '48px', height: '48px' }} />
                    </div>
                    <h3 className="h5 mb-3">{service.title}</h3>
                    <p className="text-secondary">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}