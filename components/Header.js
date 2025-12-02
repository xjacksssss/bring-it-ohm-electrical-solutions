'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { PhoneIcon } from '@heroicons/react/24/solid';

/**
 * Header Component
 * Sticky navigation with mobile menu support
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`${scrolled ? 'shadow-sm' : ''}`}
      style={{
        backgroundColor: scrolled ? '#fff' : 'rgba(255, 255, 255, 0.98)',
        transition: 'all 0.3s ease',
      }}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="fw-bold"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem'
          }}
        >
          Bring It Ohm
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              href="#home" 
              onClick={handleNavClick}
              className="mx-2"
              style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#services" 
              onClick={handleNavClick}
              className="mx-2"
              style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              href="#testimonials" 
              onClick={handleNavClick}
              className="mx-2"
              style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              onClick={handleNavClick}
              className="mx-2"
              style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#contact" 
              onClick={handleNavClick}
              className="mx-2"
              style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              href="tel:07885694524"
              className="btn btn-primary ms-lg-3 mt-2 mt-lg-0"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <PhoneIcon style={{ width: '20px', height: '20px' }} />
              07885 694524
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}