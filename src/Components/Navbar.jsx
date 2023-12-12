<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoesContext } from '../Context';
=======
import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiSearch } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoesContext } from "../Context";
import { formatNumber } from "../Price";
import { FaCartPlus } from "react-icons/fa";
>>>>>>> 7aef7070b5debd496185e9b28af8bba89d0efbed

function NavBar() {
  const { handleLogin } = useContext(ShoesContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

<<<<<<< HEAD
  const handleLoginSubmit = async () => {
    await handleLogin(email, password);
=======
  useEffect(() => {
    if (loggedInUser) {
      console.log("Usuario autenticado:", loggedInUser);
    } else {
      console.log("No hay usuario autenticado");
    }
  }, [loggedInUser]);

  const handleProfileClick = () => {
    navigate("/perfil");
  };

  const renderAuthLinks = () => {
    if (loggedInUser) {
      return (
        <>
          <Col xs="auto">
            <span onClick={handleProfileClick} style={{ cursor: "pointer" }}>
              Hola, {loggedInUser.name}
            </span>
          </Col>
          <Col xs="auto">
            <Button
              variant="link"
              className="text-decoration-none"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col xs="auto">
            <NavLink
              to="/register"
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Registrarse
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink
              to="/loginusers"
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Iniciar Sesión
            </NavLink>
          </Col>
        </>
      );
    }
>>>>>>> 7aef7070b5debd496185e9b28af8bba89d0efbed
  };

  return (
    <>
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
<<<<<<< HEAD
              <NavLink to="/loginusers" className="text-decoration-none">
                Iniciar Sesión
              </NavLink>
            </Col>
            <Col xs="auto">
              <NavLink to="/register" className="text-decoration-none">
                Registrarse
=======
              <NavLink to="/carrito" style={{ color: "white", textDecoration: "none" }}>
                <FaCartPlus className="ml-5" /> (
                {carrito.length})
>>>>>>> 7aef7070b5debd496185e9b28af8bba89d0efbed
              </NavLink>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
<<<<<<< HEAD










=======
>>>>>>> 7aef7070b5debd496185e9b28af8bba89d0efbed
