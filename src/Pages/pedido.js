import React, { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Pedido() {
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
                                <h3>Realizar Pedido</h3>
                            </div>
                        </div>

                        <div className="row margin-bottom-120" id="cancel-row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="statbox widget box box-shadow">

                                    <div className="widget-content widget-content-area checkout-content">
                                        <div className="container">
                                            <div className="row mb-5">
                                                <div className="col-md-12">
                                                    <div className="heading-title">
                                                        <h5 className="mb-4">Datos Personales</h5>
                                                    </div>
                                                    <form>
                                                        <div className="row form-row">
                                                            <div className="col-md-6 form-group">
                                                                <input className="form-control mb-4" type="text" placeholder="Nombre" />
                                                            </div>
                                                            <div className="col-md-6 form-group">
                                                                <input className="form-control mb-4" type="text" placeholder="Apellido" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-row">
                                                            <div className="col-md-12 form-group">
                                                                <input className="form-control mb-4" type="text" placeholder="Calle" />
                                                            </div>
                                                            <div className="col-md-12 form-group">
                                                                <input className="form-control mb-4" type="text" placeholder="Departamento" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-row">
                                                            <div className="col-md-6 form-group">
                                                                <input className="form-control mb-4" type="text" placeholder="Región" />
                                                            </div>
                                                            <div className="col-md-6 form-group">
                                                                <input className="form-control mb-4" type="text" placeholder="Ciudad" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="heading-title">
                                                        <h5 className=" mb-4">Información del Pedido</h5>
                                                    </div>
                                                    <div className="table-responsive">
                                                        <table className="table cart-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td><a href="#"><img className="product-thumbnail img-fluid" src="assets/img/productos/magnesio.png" alt="" /></a></td>
                                                                    <td>
                                                                        <h6 className="mb-0"><a href="javascript:void(0);">Magnesio + Vitamina B6</a></h6>

                                                                    </td>
                                                                    <td>$17.990</td>
                                                                    <td>
                                                                        <p className="product-quantity text-center">x 2</p>
                                                                    </td>
                                                                    <td className="text-right">$17.990</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><a href="javascript:void(0);"><img className="product-thumbnail img-fluid" src="assets/img/320x320.jpg" alt="" /></a></td>
                                                                    <td>
                                                                        <h6 className="mb-0"><a href="javascript:void(0);">Equilibrium</a></h6>

                                                                    </td>
                                                                    <td>$32.000</td>
                                                                    <td>
                                                                        <p className="product-quantity text-center">x 1</p>
                                                                    </td>
                                                                    <td className="text-right">$32.000</td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Subtotal</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td className="text-right">$49990</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Discount</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td className="text-right">$0</td>
                                                                </tr>
                                                                <tr className="total-amount">
                                                                    <td>Total</td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td className="text-right">$49990</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-right"><a className="btn btn-primary btn-rounded mt-4 mb-4" href="#">Pagar</a></div>
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
export default Pedido;