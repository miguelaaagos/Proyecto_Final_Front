import React, { Fragment, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import Context from "../context/context";

export default function Login() {
    const { setUsuario } = useContext(Context);
    const navigate = useNavigate();
    const [usuario, setUsuarioLocal] = useState({ correo: "", contrasena: "" });

    const handleSetUsuario = (e) => {
        const { name, value } = e.target;
        setUsuarioLocal({ ...usuario, [name]: value });
    };

    const iniciarSesion = async (e) => {
        e.preventDefault();
        const urlServer = "http://localhost:3001";
        const endpoint = "/login";
        const { correo, contrasena } = usuario;

        try {
            if (!correo || !contrasena) {
                alert("Email y contraseña son obligatorios");
                return;
            }

            const { data: token } = await axios.post(urlServer + endpoint, usuario);
            alert("Usuario identificado con éxito 😀");
            localStorage.setItem("token", token);
            setUsuario(usuario);
            navigate("/productosadmin");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message + " 🙁");
            } else {
                alert("Ha ocurrido un error al iniciar sesión 🙁");
            }
            console.log(error);
        }
    };

    return (
        <Fragment>
            <head>
                <link href="assets/css/users/login-1.css" rel="stylesheet" type="text/css" />
            </head>
            <body className="login">
                <form className="form-login" onSubmit={iniciarSesion}>
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <img alt="logo" src="assets/img/logo_fys.png" className="theme-logo" width="200px" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail">Usuario</label>
                            <input
                                value={usuario.correo}
                                onChange={handleSetUsuario}
                                type="email"
                                name="correo"
                                className="form-control mb-4"
                                placeholder="Usuario"
                                required
                            />
                            <label htmlFor="inputPassword">Contraseña</label>
                            <input
                                value={usuario.contrasena}
                                onChange={handleSetUsuario}
                                type="password"
                                name="contrasena"
                                className="form-control mb-5"
                                placeholder="Contraseña"
                                required
                            />
                            <button className="btn btn-lg btn-gradient-danger btn-block btn-rounded mb-4 mt-5" type="submit">
                                Ingresar
                            </button>
                            <NavLink to="/registro" activeClassName="active" className="btn btn-lg btn-outline-dark btn-block btn-rounded mb-3">
                                Regístrate
                            </NavLink>
                        </div>
                    </div>
                    <p className="text-center">© Yineska Verde 2023</p>
                </form>
            </body>
        </Fragment>
    );
}
