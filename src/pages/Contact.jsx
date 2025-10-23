import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.scss';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact-page">
      <Container>
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us!</p>
        </div>

        <div className="contact-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </div>

        <Row className="contact-info">
          <Col md={4}>
            <div className="info-card">
              <div className="icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>support@findnest.com</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-card">
              <div className="icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-card">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <p>123 Property Lane<br />Real Estate City, RE 12345</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
