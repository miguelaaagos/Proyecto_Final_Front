import React, { useContext, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoesContext } from '../Context';
import { formatNumber } from '../Price';
import { FaCartPlus } from 'react-icons/fa';

function NavBar() {
  const { carrito, loggedInUser, handleLogout } = useContext(ShoesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      console.log('Usuario autenticado:', loggedInUser);
    } else {
      console.log('No hay usuario autenticado');
    }
  }, [loggedInUser]);

  const handleProfileClick = () => {
    navigate('/perfil');
  };

  const renderAuthLinks = () => {
    if (loggedInUser) {
      return (
        <>
          <Col xs="auto">
            <span onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              Hola, {loggedInUser.name}
            </span>
          </Col>
          <Col xs="auto">
            <Button variant="link" className="text-decoration-none" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col xs="auto">
            <NavLink to="/register" className="text-decoration-none">
              Registrarse
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/loginusers" className="text-decoration-none">
              Iniciar Sesión
            </NavLink>
          </Col>
        </>
      );
    }
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
            {renderAuthLinks()}
            <Col xs="auto">
              <NavLink to="/carrito">
                <FaCartPlus className="text-decoration-none ml-5" /> ({carrito.length})
              </NavLink>
            </Col>
          </Row>
        </Form>
        <div className="logo-nombre mx-1 mb-0 text-decoration-none">
          <h4>💳 Total a Pagar: ${formatNumber(0)} </h4>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;








