import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Nosotros() {
    return (
        <Fragment>
            <Header />
            <head>

                <link href="assets/css/pages/privacy/privacy.css" rel="stylesheet" type="text/css" />

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

                        <div id="privacyWrapper" className="">
                            <div className="container p-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="policy-info-ques mt-5 mb-4">Nosotros</h1>
                                        <p className="mb-4">Nos apasiona el bienestar, queremos brindarte una experiencia y asesoría excepcional, permitiéndote acceder a los mejores suplementos y vitaminas del mercado, que mejorarán tu calidad de vida.</p>
                                        <p className="text-center"><img src="assets/img/felizysanapost.png" width="600px" /></p>





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
export default Nosotros;