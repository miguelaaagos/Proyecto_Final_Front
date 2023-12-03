import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await fetch('http://127.0.0.1:5000/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Redireccionando a la página principal...',
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: responseData.message || 'Email o Contraseña Incorrectos',
        });
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('¿Olvidaste tu contraseña?');
  };

  const handleRegister = () => {
    console.log('Registro');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Inicio de Sesión</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">Recuérdame</label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
                <div className="mt-3">
                <p className="text-center">
                    <NavLink to="/forgottenpassword" className="text-decoration-none">
                       <a href="#" className='text-decoration-none'>Olvidastes la Contraseña</a>
                    </NavLink>
                  </p>
                  <p className="text-center">
                    <NavLink to="/register" className="text-decoration-none">
                      ¿No tienes una cuenta? <a href="#" className='text-decoration-none' onClick={handleRegister}>Regístrate</a>
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

