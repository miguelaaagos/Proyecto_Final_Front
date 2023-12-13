import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function NavbarGuest() {
  return (
    <Navbar className="navbar navbar-dark bg-dark p-3">
      <Form inline className="mr-auto">
        <Row className="align-items-center">
          <div className="col">
            <NavLink to="/" className="navbar-logo">
              <img
                src="src/assets/img/logo_snicky_blanco.png"
                className="d-inline-block align-top"
                alt="Logo de la empresa"
              />
            </NavLink>
          </div>
          <Col xs="auto">
            <Form.Control type="text" placeholder="Buscar Zapatillas" />
          </Col>
          <Col xs="auto">
            <Button type="submit">
              <BiSearch style={{ textDecoration: "none" }} />
            </Button>
          </Col>
          <Col xs="auto">
            <NavLink to="/loginusers" className="text-decoration-none" style={{ color: "white" }}>
              Iniciar Sesión
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/register" className="text-decoration-none" style={{ color: "white" }}>
              Registrarse
            </NavLink>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NavbarGuest;
