import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoesContext } from '../Context';

function NavBar() {
  const { handleLogin } = useContext(ShoesContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async () => {
    await handleLogin(email, password);
  };

  return (
    <>
      <Navbar className="bg-light p-3">
        <Form inline className="mx-auto">
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control type="text" placeholder="Buscar Zapatillas" />
            </Col>
            <Col xs="auto">
              <Button type="submit">
                <BiSearch style={{ textDecoration: 'none' }} />
              </Button>
            </Col>
            <Col xs="auto">
              <NavLink to="/loginusers" className="text-decoration-none">
                Iniciar Sesión
              </NavLink>
            </Col>
            <Col xs="auto">
              <NavLink to="/register" className="text-decoration-none">
                Registrarse
              </NavLink>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;










