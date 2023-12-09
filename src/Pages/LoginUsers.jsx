import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoesContext } from "../Context";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";

const Login = () => {
  const { login, loading, loggedInUser } = useContext(ShoesContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      // Si ya hay un usuario autenticado, redirige a la página principal
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al iniciar sesión",
      });
    }
  };

  return (
    <div className="container1">
      <Navbar /> 
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card" id="form">
            <div className="card-body">
              <h4 className="card-title text-center">Inicio de Sesión</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
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
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
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
                  <label className="form-check-label" htmlFor="rememberMe">
                    Recuérdame
                  </label>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-md btn-block"
                    onClick={handleLogin}
                    disabled={loading}
                  >
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
