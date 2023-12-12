import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ShoesContext } from '../Context';
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const { login, loading, loggedInUser } = useContext(ShoesContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [userNotRegistered, setUserNotRegistered] = useState(false);
  const [formClosed, setFormClosed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      navigate('/');
    }
  }, [loggedInUser, navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    setUserNotRegistered(false);

    try {
      await login(email, password);

      if (!loggedInUser || Object.keys(loggedInUser).length === 0) {
        setUserNotRegistered(true);
        return;
      }

      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setLocalError(error.message || 'Error al iniciar sesión.');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al iniciar sesión',
      });
    }
  };

  const handleCloseForm = () => {
    setFormClosed(true);
    navigate('/');
  };

  if (formClosed) {
    return null;
  }

  return (
    <div className="container1">
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card" id="form">
            <div className="card-body">
              <h4 className="card-title text-center">Inicio de Sesión</h4>
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-check">
                  <Form.Check
                    type="checkbox"
                    label="Recuérdame"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-lg btn-block"
                  disabled={loading}
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </Button>
                {localError && (
                  <Alert variant="danger" className="mt-3">
                    {localError}
                  </Alert>
                )}
              </Form>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  type="button"
                  className="btn btn-primary btn-md btn-block"
                  onClick={handleCloseForm}
                  disabled={loading}
                >
                  Cerrar Formulario
                </button>
              </div>
              <div className="mt-3">
                <p className="text-center">
                  <NavLink
                    to="/forgottenpassword"
                    className="text-decoration-none"
                  >
                    Olvidaste la Contraseña
                  </NavLink>
                </p>
                <p className="text-center">
                  <NavLink to="/register" className="text-decoration-none">
                    ¿No tienes una cuenta? Regístrate
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

