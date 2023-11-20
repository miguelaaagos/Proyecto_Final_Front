import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Header() {
    return (
        <Fragment>
            <header className="tabMobileView header navbar fixed-top d-lg-none">
                <ul className="navbar-nav flex-row ml-lg-auto w-100">
                    <li className="nav-item dropdown user-profile-dropdown w-100 text-center">
                        <div className="nav-toggle d-inline-block float-left mt-2">
                            <a href="javascript:void(0);" className="nav-link sidebarCollapse d-inline-block"
                                data-placement="bottom">
                                <FaBars />
                            </a>
                            <NavLink to="/" activeClassName="active"><img src="http://localhost:3000/assets/img/logo_fys.png" className="img-fluid"
                            alt="logo"/></NavLink>
                           
                        </div>
                        <a href="javascript:void(0);" className="nav-link dropdown-toggle user d-inline-block float-right"
                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="media">
                                <img src="http://localhost:3000/assets/img/90x90.jpg" className="img-fluid mr-2" alt="admin-profile" />
                                <div className="media-body align-self-center">
                                    <h6 className="mb-1">Yineska Verde</h6>

                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu p-0 mt-5" aria-labelledby="dropdownMenuButton">

                            <a href="" className="dropdown-item dropdown-item-btn">
                                <i className="mr-2 flaticon-power-off"></i> <span className="align-self-center">Cerrar Sesión</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </header>

            <header className="desktop-nav header navbar fixed-top">
                <div className="nav-logo mr-5 ml-4 d-lg-inline-block d-none">
                <NavLink to="/" activeClassName="active"><img src="http://localhost:3000/assets/img/logo_fys.png" className="img-fluid" alt="logo" /></NavLink>
               
                </div>


                <ul className="navbar-nav flex-row ml-lg-auto">
                    <li className="nav-item mr-5 d-lg-block d-none">
                        <form className="form-inline form-inline search animated-search" role="search" >
                            <i className="flaticon-search-1 d-lg-none d-block"></i>
                            <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Buscar..." />
                        </form>
                    </li>




                    <li className="nav-item  message-dropdown ml-lg-4 mr-lg-4">
                        <a href="#" className="nav-link">
                            <div className="row">
                            <NavLink to="/registro" activeClassName="active"><span className="text-white p-3">Regístrate</span></NavLink>
                            </div>

                        </a>


                    </li>


                    <li className="nav-item  notification-dropdown ml-3 mr-lg-4">
                        <a href="#" className="nav-link">
                            <div className="row">
                            <NavLink to="/login" activeClassName="active"><span className="text-white p-3">Inicia Sesión</span></NavLink>
                            </div>
                        </a>




                    </li>
                </ul>
            </header>

            
   
        </Fragment>
    )
}
export default Header;