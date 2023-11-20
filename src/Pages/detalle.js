import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Detalle() {
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
                                <h3>Detalle Del Producto</h3>
                            </div>
                        </div>

                        <div className="statbox widget box box-shadow">
                            <div className="widget-content">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                                        <div className="widget-content-area product-detail-1">
                                            <div className="row">
                                                <div className="col-lg-6 text-center">
                                                    <div className="product-slider">
                                                        <a className="product-image">
                                                            <div className="preview-pic tab-content">
                                                                <div className="tab-pane active" id="pic-1">
                                                                    <img src="assets/img/productos/magnesio.png" alt="img" className="img-fluid" />
                                                                </div>
                                                                <div className="tab-pane" id="pic-2">
                                                                    <img src="assets/img/productos/detalle_magnesio.png" alt="img" className="img-fluid" />
                                                                </div>
                                                                <div className="tab-pane" id="pic-3">
                                                                    <img src="assets/img/productos/tabla_magnesio.png" alt="img" className="img-fluid" />
                                                                </div>

                                                            </div>
                                                        </a>
                                                        <ul className="preview-thumbnail nav nav-tabs">
                                                            <li className="mb-sm-0 mb-2">
                                                                <a data-target="#pic-1" data-toggle="tab" className="active">
                                                                    <img src="assets/img/productos/magnesio.png" alt="img" className="img-fluid" />
                                                                </a>
                                                            </li>
                                                            <li className="mb-sm-0 mb-2">
                                                                <a data-target="#pic-2" data-toggle="tab">
                                                                    <img src="assets/img/productos/detalle_magnesio.png" alt="img" className="img-fluid" />
                                                                </a>
                                                            </li>
                                                            <li className="mb-sm-0 mb-2">
                                                                <a data-target="#pic-3" data-toggle="tab">
                                                                    <img src="assets/img/productos/tabla_magnesio.png" alt="img" className="img-fluid" />
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="product-detailing">
                                                        <h2 className="product-name mt-4">Magnesium + Vitamina B6 (100 tabs)</h2>
                                                        <div className="product-rating mb-3">
                                                            <span className="star-rating">
                                                                <i className="flaticon-star-full"></i>
                                                                <i className="flaticon-star-full"></i>
                                                                <i className="flaticon-star-full"></i>
                                                                <i className="flaticon-star-full"></i>
                                                                <i className="flaticon-star-half"></i>
                                                            </span>
                                                            <a href="#">(2 reseñas)</a>
                                                        </div>
                                                        <h2 className="product-price">$17.990</h2>
                                                        <div className="product-description mt-4 mb-5">
                                                            <p>El Magnesio juega un papel esencial en el mantenimiento de una adecuada mineralización ósea. También está involucrado en la contracción muscular, la producción de energía, la formación de proteínas y los impulsos nerviosos. La formulación de Solgar contiene vitamina B6 para apoyar el metabolismo proteico, contribuyendo así a la formación y regeneración muscular.</p>
                                                        </div>

                                                        <div className="form-row product-btn-cart">
                                                            <div className="form-group col-md-6">
                                                            <NavLink to="/carrito" activeClassName="active"><a className="btn btn-dark">Añadir al carro</a></NavLink>
                                                                
                                                            </div>
                                                        </div>
                                                        <hr className="mt-3 mb-3" />


                                                        <ul className="info-list list-unstyled social-icons mb-0">
                                                            <li>
                                                                <span className="info-list-title">Compartir:</span>
                                                                <span>
                                                                    <i className="flaticon-twitter-logo"></i>
                                                                    <i className="flaticon-facebook-logo"></i>
                                                                    <i className="flaticon-instagram-logo"></i>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="product-breif-description">
                                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" id="pills-description" data-toggle="pill" href="#pills-desc" role="tab" aria-controls="pills-desc" aria-selected="true">Modo de Uso</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" id="pills-additional-info" data-toggle="pill" href="#pills-add-info" role="tab" aria-controls="pills-add-info" aria-selected="false">Precauciones</a>
                                                        </li>

                                                    </ul>
                                                    <div className="tab-content" id="pills-tabContent">
                                                        <div className="tab-pane fade show active" id="pills-desc" role="tabpanel" aria-labelledby="pills-description">
                                                            <h3 className="mb-4 mt-5">Modo de uso:</h3>
                                                            <p>
                                                                Consumir 1 porción al día, de preferencia con las comidas. Consumo máximo 1 porción diaria.
                                                    </p>
                                                        </div>
                                                        <div className="tab-pane fade" id="pills-add-info" role="tabpanel" aria-labelledby="pills-additional-info">
                                                            <h3 className="mb-4 mt-5">Precauciones:</h3>
                                                            <p>
                                                                Mantener en lugar fresco, seco y alejado de los niños. Su uso no es recomendable para menores de 8 años, embarazadas y nodrizas, salvo indicación profesional competente y no reemplaza a una alimentación balanceada
                                                    </p>
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
            </div>
           
            <Footer />
        </Fragment>
    )
}
export default Detalle;