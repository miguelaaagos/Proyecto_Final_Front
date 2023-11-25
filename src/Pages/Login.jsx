import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalContent = ({ email, setEmail, closeModal }) => {
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    const navigate = useNavigate();

    

    e.preventDefault();
  };

  return (
    <div className="modal fade show text-center" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-light text-dark p-5 rounded-lg cursor-pointer">
          <div className="modal-body">
            <h3 className="text-2xl m-5 font-medium">Iniciar Sesión</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="name@handyshop.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="d-flex justify-content-between align-items-center mb-3">
                <a href="/Modal" className="text-white">
                  Contraseña Perdida?
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
