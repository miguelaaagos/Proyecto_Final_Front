import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:5000/usuario/recuperar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Se ha enviado un correo de recuperación de contraseña. Por favor, verifica tu bandeja de entrada.',
          timer: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 3000);

      } else {
        const responseData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: responseData.message || 'Error desconocido',
        });
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Recuperar Contraseña</h5>
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
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleForgotPassword}
                  disabled={loading}
                >
                  {loading ? 'Enviando correo...' : 'Enviar Correo de Recuperación'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
