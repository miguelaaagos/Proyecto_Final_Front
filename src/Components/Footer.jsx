import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = () => {
  return (
    <div className="d-flex flex-column">
      <footer className="footer mt-auto py-3 bg-dark">
        <Container>
          <Row>
            <Col md={12}>
              <ul className="list-unstyled d-flex justify-content-between">
                <li>
                  <a
                    href="#trabaja"
                    className="text-light text-decoration-none"
                  >
                    Trabaja con Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#terminos"
                    className="text-light text-decoration-none"
                  >
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="#accesibilidad"
                    className="text-light text-decoration-none"
                  >
                    Accesibilidad
                  </a>
                </li>
                <li>
                  <a href="#ayuda" className="text-light text-decoration-none">
                    © 2023 Snicky <i class="fa-brands fa-instagram mr-2"></i> <i class="fab fa-facebook-f mr-2"></i> <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default MyFooter;
