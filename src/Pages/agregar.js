import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Productosform from '../components/productosform';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Agregar() {
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
                        <div className="page-header pt-5">
                            <div className="page-title">
                                <h3>Administrar Productos</h3>

                            </div>

                        </div>


                    </div>

                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                            <div className="statbox widget box box-shadow">

                                <Productosform />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment >
    )
}
export default Agregar;