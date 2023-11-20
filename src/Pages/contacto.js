import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Contacto() {
    return (
        <Fragment>
            <Header />
            <head>

                <link href="assets/css/pages/contact_us.css" rel="stylesheet" type="text/css" />

            </head>
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
                            <div className="page-header">
                                <div className="page-title p-4">
                                    <h3>Contacto</h3>
                                </div>
                            </div>


                            <div className="contact-us layout-spacing">
                                <div className="cu-contact-section">

                                    <div className="row">

                                        <div className="col-xl-12 text-center">
                                            <div className="cu-contact-header  mb-5 mt-2">
                                                <h5>Estamos para ayudarte</h5>
                                            </div>
                                        </div>



                                        <div className="col-xl-8 col-lg-12 col-md-6 col-sm-12">
                                            <form className="mt-4 mb-4">
                                                <div className="row mb-4">
                                                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                                        <input type="text" className="form-control" placeholder="Nombre" />
                                                    </div>
                                                    <div className="col-sm-6 col-12">
                                                        <input type="text" className="form-control" placeholder="Apellido" />
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col-sm-12 col-12">
                                                        <input type="text" className="form-control" placeholder="Asunto" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Mensaje"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col text-sm-left text-center">
                                                        <button className="btn btn-primary mt-4 mb-3">Enviar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-xl-3 col-lg-12 col-md-5 col-sm-12 cu-contact-info mx-auto  mt-xl-0 mt-lg-5 mt-md-0 mt-sm-5">
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-4 col-md-12 col-sm-6 col-12    mt-xl-4 mt-lg-0 mt-md-4 ">
                                                    <div className="media d-sm-flex d-block text-sm-left text-center mb-lg-5 mb-md-5 mb-sm-5 mb-5    media-top   pb-xl-3 pb-lg-0 pb-md-3 pb-sm-3 pb-3">
                                                        <i className="mr-sm-3 flaticon-home-fill-1"></i>
                                                        <div className="media-body">
                                                            <h6 className="mt-sm-0 mt-3">Dirección:</h6>
                                                            <p className="mb-0">Chile</p>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-4 col-md-12 col-sm-6 col-12">
                                                    <div className="media d-sm-flex d-block text-sm-left text-center mb-lg-5 mb-md-5 mb-sm-5 mb-5    pb-xl-3 pb-lg-0 pb-md-3 pb-sm-3 pb-3">
                                                        <i className="mr-sm-3 flaticon-telephone  mb-4 mb-sm-0"></i>
                                                        <div className="media-body">
                                                            <h6 className="mt-sm-0 mt-3">Teléfonos</h6>
                                                            <p className="mb-0">+56 9 575 11 990</p>
                                                            <p className="mb-0">+56 9 5731 9567</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-4 col-md-12 col-sm-6 col-12 mx-auto">
                                                    <div className="media d-sm-flex d-block text-sm-left text-center mb-lg-5 mb-md-5 mb-sm-5 mb-5 ">
                                                        <i className="mr-sm-3 flaticon-email-fill-2"></i>
                                                        <div className="media-body">
                                                            <h6 className="mt-sm-0 mt-3">Correo:</h6>
                                                            <p className="mb-0">info@felizysana.cl</p>
                                                            <p className="mb-0">clientes@felizysana.cl</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                   
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default Contacto;