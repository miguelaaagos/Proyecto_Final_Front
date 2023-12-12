import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import { BiSearch } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoesContext } from '../Context';

function NavbarAuth() {
  const { carrito, loggedInUser, handleLogout } = useContext(ShoesContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogoutClick = () => {
    handleLogout(); 
    navigate('/'); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Navbar className="bg-light p-3">
      <div className="mx-auto d-flex align-items-center">
        <NavLink to="/carrito" className="text-decoration-none">
          🛒 ({carrito ? carrito.length : 0})
        </NavLink>
        <span className='mx-5 fw-bold'>Hola 😎
          <NavLink to="/detailsusers" className="text-decoration-none mx-3">
            {loggedInUser.Username}
          </NavLink>
        </span>
        <Form inline className="ml-auto" onSubmit={handleSearch}>
          <Row className="align-items-center">
            <Col xs="auto">
              <FormControl
                type="text"
                placeholder="Buscar zapatillas"
                className="mr-sm-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button variant="outline-success" type="submit">
                <BiSearch style={{ textDecoration: 'none' }} />
              </Button>
            </Col>
          </Row>
        </Form>
        <Button variant="link" className="text-decoration-none" onClick={handleLogoutClick}>
          Cerrar Sesión
        </Button>
      </div>
    </Navbar>
  );
}

export default NavbarAuth;




