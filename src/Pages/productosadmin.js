import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Productolistaadmin from '../components/productoslistaadmin';

import { FaBars } from "react-icons/fa";



function Productosadmin() {

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
                                <h3>Productos cargados</h3>
                            </div>
                            <div className="p-5">
                                <NavLink to="/agregar" activeClassName="active"><button class="btn btn-secondary btn-rounded mb-4 mr-2 float-right">Agregar Producto</button></NavLink>
                            </div>
                        </div>

                        <div id="product-catalog-container" className="container">



                            <div className="row">
                                <div className="col-12">
                                    <div className="layout-spacing">
                                        <div className="statbox widget box box-shadow">
                                            <div className="product-cat4">

                                                <div className="container">
                                                    <div className="row row-cols-1">
                                                        <Productolistaadmin />
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
export default Productosadmin;