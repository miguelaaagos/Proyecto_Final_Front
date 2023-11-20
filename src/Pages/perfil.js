import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Perfil() {
    return (
        <Fragment>
            <Header />
            <div className="main-container" id="container">
                <div className="overlay"></div>
                <div className="cs-overlay"></div>
                <div className="search-overlay"></div>


                <div className="topbar-nav header navbar fixed-top" role="banner">
                    <div id="dismiss" className="d-lg-none text-right"><FaBars /></div>
                    <nav id="topbar">
                        <ul className="list-unstyled menu-categories d-lg-flex justify-content-lg-around mb-0" id="topAccordion">
                            <li className="menu">
                                <NavLink to="/" activeClassName="active">Inicio</NavLink>


                            </li>

                            <li className="menu">
                                <NavLink to="/nosotros" activeClassName="active">Quiénes Somos</NavLink>

                            </li>

                            <li className="menu">
                                <NavLink to="/productos" activeClassName="active">Productos</NavLink>

                            </li>

                            <li className="menu">
                                <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>

                            </li>



                        </ul>
                    </nav>

                </div>

                <div id="content" className="main-content">
                    <div className="container">
                        <div className="page-header p-4">
                            <div className="page-title">
                                <h3>Mi Perfil</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                                <form className="general-info">
                                    <div className="info">
                                        <h6 className="mt-4">Información General</h6>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-5">
                                                <div className="upload ml-md-5 mt-4 pr-md-4">
                                                    <input type="file" id="input-file-max-fs" className="dropify" data-default-file="assets/img/200x200.jpg" data-max-file-size="2M" />
                                                    <p className="mt-2"><i className="flaticon-cloud-upload mr-1"></i> Subir Imágen</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-7 mt-md-0 mt-4">
                                                <div className="form">
                                                    <div className="form-group">
                                                        <label for="firstName">Nombre</label>
                                                        <input type="text" className="form-control mb-4" id="firstName" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="lastName">Apellido</label>
                                                        <input type="text" className="form-control mb-4" id="lastName" placeholder="" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="lastName">Rut</label>
                                                        <input type="text" className="form-control mb-4" id="lastName" placeholder="" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="save-info">
                                        <div className="row">
                                            <div className="col-md-11 mx-auto">
                                                <button className="btn btn-gradient-warning mb-4 float-right btn-rounded">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>



                            <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                                <form className="contact">
                                    <div className="info">
                                        <h5 className="mt-4">Información de Contacto</h5>
                                        <div className="row">
                                            <div className="col-md-11 mx-auto">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="address">Región</label>
                                                            <input type="text" className="form-control mb-4" id="address" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="address">Comuna</label>
                                                            <input type="text" className="form-control mb-4" id="address" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="location">Calle</label>
                                                            <input type="text" className="form-control mb-4" id="location" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="location">Número</label>
                                                            <input type="text" className="form-control mb-4" id="location" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="location">Casa o Departamento</label>
                                                            <input type="text" className="form-control mb-4" id="location" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="phone">Teléfono</label>
                                                            <input type="text" className="form-control mb-4" id="phone" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="email">Correo</label>
                                                            <input type="text" className="form-control mb-4" id="email" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label for="email">Confimar Correo</label>
                                                            <input type="text" className="form-control mb-4" id="email" placeholder="" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="save-info">
                                        <div className="row">
                                            <div className="col-md-11 mx-auto">
                                                <button className="btn btn-gradient-warning mb-4 float-right btn-rounded">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>







                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default Perfil;