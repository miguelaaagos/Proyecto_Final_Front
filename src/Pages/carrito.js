import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Carrito() {
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
                                <h3>Ver Carrito</h3>
                            </div>
                        </div>

                        <div className="row" id="cancel-row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="statbox widget box box-shadow">
                                    <div className="widget-header">
                                        <div className="row">
                                            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                                <h4>Detalle</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content widget-content-area view-cart-content">
                                        <div className="container">
                                            <div className="row mb-5">
                                                <div className="col-md-12">
                                                    <form method="post">
                                                        <div className="table-responsive">
                                                            <table className="table view-cart-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="col-thumbnail">Producto</th>
                                                                        <th className="col-title"></th>
                                                                        <th className="col-price">Precio</th>
                                                                        <th className="col-quantity">Cantidad</th>
                                                                        <th className="col-subtotal">Total</th>
                                                                        <th className="col-remove"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td><a href="#"><img className="product-thumbnail img-fluid" src="assets/img/productos/magnesio.png" alt="" /></a></td>
                                                                        <td>
                                                                            <h6 className="mb-0"><a href="#">Magnesio + Vitamina B6</a></h6>

                                                                        </td>
                                                                        <td>$17.990</td>
                                                                        <td>
                                                                            <input className="form-control" type="number" step="1" min="1" value="1" />
                                                                        </td>
                                                                        <td>$17.990</td>
                                                                        <td className="cart-remove text-center"><a href="#"><i className="flaticon-close-fill"></i></a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="#"><img className="product-thumbnail img-fluid" src="assets/img/productos/antiooxidante.png" alt="" /></a></td>
                                                                        <td>
                                                                            <h6 className="mb-0"><a href="#">Equilibrium</a></h6>

                                                                        </td>
                                                                        <td>$32.000</td>
                                                                        <td>
                                                                            <input className="form-control" type="number" step="1" min="1" value="1" />
                                                                        </td>
                                                                        <td>$32.000</td>
                                                                        <td className="cart-remove text-center"><a href="#"><i className="flaticon-close-fill"></i></a></td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-4">
                                                                <input className="form-control" type="text" placeholder="Código de cupón" />
                                                            </div>
                                                            <div className="form-group col-md-4">
                                                                <a className="btn btn-outline-dark btn-rounded" href="javascript:void(0);">Aplicar Cupon</a>
                                                                <i className="flaticon-question" data-toggle="tooltip" data-placement="top" title="Apply coupon to avail discount"></i>
                                                            </div>
                                                            <div className="form-group col-md-4 text-md-right">
                                                                <a className="btn btn-primary btn-rounded" href="javascript:void(0);">Actualizar Carro</a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <table className="table cart-table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Subtotal</td>
                                                                <td className="text-right">$49990</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Descuento</td>
                                                                <td className="text-right">$0</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total</td>
                                                                <td className="text-right">$49990</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="text-right"><a className="btn btn-primary btn-rounded mt-4 mb-3" href="javascript:void(0);">Realizar pedido</a></div>
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
export default Carrito;