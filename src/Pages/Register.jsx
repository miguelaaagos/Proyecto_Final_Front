import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const RegisterUsers = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success'
    });
    
    navigate('/');
  };

 

  return (
    <form className="w-50 bg-light p-5 mb-4 mx-auto text-center">
      <div className="mb-3">
        <label htmlFor="floating_email" className="form-label fs-5">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="floating_email"
          placeholder="name@example.com"
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
          id="floating_password"
          placeholder="Password"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floating_repeat_password" className="form-label fs-5">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="floating_repeat_password"
          placeholder="Confirm Password"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floating_first_name" className="form-label fs-5">
          Ingrese su Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="floating_first_name"
          placeholder="First Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floating_phone" className="form-label fs-5">
          Phone number
        </label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="form-control"
          id="floating_phone"
          placeholder="1234567890"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterUsers;
