import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-4 fixed-bottom">
      <Container>
        <Row>
          <Col md={12}>
            <ul className="list-unstyled d-flex justify-content-between">
              <li><a href="#trabaja" className="text-light text-decoration-none">Trabaja con Nosotros</a></li>
              <li><a href="#terminos" className="text-light text-decoration-none">Términos y Condiciones</a></li>
              <li><a href="#accesibilidad" className="text-light text-decoration-none">Accesibilidad</a></li>
              <li><a href="#ayuda" className="text-light text-decoration-none">Ayuda</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
