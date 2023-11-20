import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import Productolista from '../components/productoslista';


function Index() {
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
                                    <h3>Inicio</h3>
                                </div>
                            </div>

                            <div id="product-catalog-container" className="container">

                                <div className="row">

                                    <div className="col-xl-6 col-lg-6 col-md-6 layout-spacing">
                                        <div className="statbox widget box box-shadow">
                                            <div className="widget-content widget-content-area product-cat2">
                                                <div className="row">
                                                    <div
                                                        className="col-xl-6 order-xl-1 col-lg-12 col-md-12 order-md-2 col-sm-6 order-sm-1 order-2">

                                                        <h5>Magnesio + Vitamina B6</h5>
                                                        <h3 className="mb-4">20% de Descuento $17.990</h3>
                                                        <p>Favorece la absorción de calcio en los huesos. Ayuda a prevenir calambres
                                                musculares. </p>
                                                        <NavLink to="/detalle" activeClassName="active"> <button className="btn">Ver promoción</button></NavLink>

                                                    </div>
                                                    <div
                                                        className="col-xl-6 order-xl-2 col-lg-12 col-md-12 order-md-1 col-sm-6 text-center order-sm-2 order-1 mb-sm-0 mb-4">
                                                        <img alt="image-product" src="assets/img/productos/magnesio.png"
                                                            className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 layout-spacing">
                                        <div className="statbox widget box box-shadow">
                                            <div className="widget-content widget-content-area product-cat2">
                                                <div className="row">
                                                    <div
                                                        className="col-xl-6 order-xl-1 col-lg-12 col-md-12 order-md-2 col-sm-6 order-sm-1 order-2">

                                                        <h5>Equilibrium</h5>
                                                        <h3 className="mb-4">10% de Descuento $32.000</h3>
                                                        <p>Este súper antioxidante te ayudará a detener y revertir el envejecimiento
                                                celular</p>
                                                        <NavLink to="/detalle" activeClassName="active"> <button className="btn">Ver promoción</button></NavLink>

                                                    </div>
                                                    <div
                                                        className="col-xl-6 order-xl-2 col-lg-12 col-md-12 order-md-1 col-sm-6 text-center order-sm-2 order-1 mb-sm-0 mb-4">
                                                        <img alt="image-product" src="assets/img/productos/antiooxidante.png"
                                                            className="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="layout-spacing">
                                        <div className="statbox widget box box-shadow">
                                            <div className="product-cat4">

                                                <div className="container">
                                                    <div className="row row-cols-1 align-items-center"> <Productolista /></div>
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
export default Index;