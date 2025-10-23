import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/about.scss';

const About = () => {
  return (
    <div className="about-page">
      <Container>
        <div className="about-header">
          <h1>About FindNest</h1>
          <p className="subtitle">Discover Your Perfect Space</p>
        </div>

        <Row className="about-section">
          <Col lg={12}>
            <h2>Our Mission</h2>
            <p>
              At FindNest, we believe that finding the perfect home shouldn't be a challenge. 
              Our mission is to revolutionize the real estate experience by providing a seamless, 
              intuitive platform that connects property seekers with their dream homes. Through 
              innovative technology and user-centric design, we're making property search and 
              acquisition more accessible, transparent, and enjoyable than ever before.
            </p>
          </Col>
        </Row>

        <Row className="about-section">
          <Col lg={6}>
            <h2>Why Choose FindNest?</h2>
            <p>
              • Advanced search algorithms for precise matches<br/>
              • Real-time property updates and notifications<br/>
              • Verified listings and trusted property partners<br/>
              • Virtual tours and detailed property insights<br/>
              • Seamless communication with property owners<br/>
              • Comprehensive neighborhood information
            </p>
          </Col>
          <Col lg={6}>
            <h2>Our Values</h2>
            <p>
              • Transparency in every transaction<br/>
              • Innovation in property search technology<br/>
              • Customer satisfaction as our priority<br/>
              • Reliability in property information<br/>
              • Community-focused approach<br/>
              • Continuous platform improvement
            </p>
          </Col>
        </Row>

        <Row className="team-section">
          <Col lg={12}>
            <h2 className="text-center mb-4">Our Leadership Team</h2>
          </Col>
          <Col lg={4}>
            <div className="team-member">
              <img src="/team/founder.jpg" alt="Founder" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
              <h3>Sarah Johnson</h3>
              <p className="position">Founder & CEO</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="team-member">
              <img src="/team/tech-lead.jpg" alt="Tech Lead" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
              <h3>Michael Chen</h3>
              <p className="position">Chief Technology Officer</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="team-member">
              <img src="/team/operations.jpg" alt="Operations Head" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
              <h3>Emma Rodriguez</h3>
              <p className="position">Head of Operations</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
