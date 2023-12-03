import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { ShoesContext } from '../Context';
import { formatNumber } from '../Price';
import { FaCartPlus } from "react-icons/fa";

function NavBar() {
  const { carrito } = useContext(ShoesContext);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = carrito.reduce((a, { precio, cantidad }) => a + precio * cantidad, 0);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  const handleLogin = (email) => {
    setLoggedInUser(email);
    closeModal();
  };

  const handleLogout = () => {
    setLoggedInUser(null);
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
            {loggedInUser && (// Si no está logueado, muestra los botones de Registrarse e Iniciar Sesión
              <>
                <Col xs="auto">
                  <NavLink to="/register" className="text-decoration-none">Registrarse</NavLink>
                </Col>
                <Col xs="auto">
                  <NavLink to="/loginusers" className="text-decoration-none">Iniciar Sesión</NavLink>
                </Col>
              </>
            )}
            {!loggedInUser && (// Si está logueado, muestra el nombre del usuario y el botón de Cerrar Sesión
              <>
                <Col xs="auto">
                  <span>Hola, {loggedInUser}</span>
                </Col>
                <Col xs="auto">
                  <Button variant="link" className='text-decoration-none' onClick={handleLogout}>Cerrar Sesión</Button>
                </Col>
              </>
            )}
            <Col xs="auto">
              <NavLink to="/carrito"><FaCartPlus className="text-decoration-none ml-5"/>({carrito.length})</NavLink>
            </Col>
          </Row>
        </Form>
        <div className="logo-nombre mx-1 mb-0 text-decoration-none">
          <h4>💳 Total a Pagar: ${formatNumber(total)} </h4>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;






