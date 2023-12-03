import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ModalContent = ({ setLoggedInUser, closeModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setLoggedInUser(responseData.email);

        if (rememberMe) {
          localStorage.setItem('rememberMe', emailInput);
        } else {
          localStorage.removeItem('rememberMe');
        }

        closeModal(); 
        navigate('/');  
      } else if (response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Correo o contraseña incorrectos.',
          text: 'Por favor, verifica tus credenciales e inténtalo nuevamente.',
          footer: '<a href="#">No recuerdas las credenciales</a>',
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: errorData.error || 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error al iniciar sesión',
        text: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="modal fade show text-center" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-light text-dark p-5 rounded-lg cursor-pointer">
          <div className="modal-body">
            <h3 className="text-2xl m-5 fw font-medium">Iniciar Sesión</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="name@handyshop.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Your password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength="6"
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    id="remember"
                    type="checkbox"
                    className="form-check-input"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember" className="form-check-label">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;

