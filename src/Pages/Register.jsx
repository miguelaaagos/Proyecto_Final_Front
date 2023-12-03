import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegisterUsers = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          username: formData.username,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Gracias por registrarte!',
          text: 'Revisa tu correo para confirmar tu cuenta',
          icon: 'success',
        });

        navigate('/');
      } else {
        Swal.fire({
          title: 'Error al registrarse',
          text: 'Por favor, verifica tus datos e inténtalo de nuevo.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error al registrarse',
        text: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
      });
    }
  };

  return (
    <form className="w-50 bg-light p-5 mb-4 mx-auto text-center" onSubmit={handleSubmit}>
      <h1 className="mb-4">Registro de Usuarios:</h1>
      <div className="mb-3">
        <label htmlFor="floating_email" className="form-label fs-5">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floating_password" className="form-label fs-5">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floating_first_name" className="form-label fs-5">
          Ingrese su Nombre de Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="First Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
    </form>
  );
};

export default RegisterUsers;
