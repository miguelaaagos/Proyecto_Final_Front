import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary p-3">
      <Form inline className="mx-auto">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control type="text" placeholder="Buscar Zapatillas" />
          </Col>
          <Col xs="auto">
            <Button type="submit"><BiSearch /></Button>
          </Col>
          <Col xs="auto">
            <NavLink to="/register">
              <p>Registrarse</p>
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/login">
              <p>Iniciar Sesión</p>
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/detailscart">
              <FaCartPlus/>
            </NavLink>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NavBar;

