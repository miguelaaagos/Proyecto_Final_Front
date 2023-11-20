import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <Fragment>
            <footer class="footer-section theme-footer">



                <div class="footer-section-2 container-fluid">
                    <div class="row">
                        <div id="toggle-grid" class="col-xl-7 col-md-6 col-sm-6 col-12 text-sm-left text-center">
                            <ul class="list-inline links ml-sm-5">
                                <li class="list-inline-item mr-3">
                                    <NavLink to="/" activeClassName="active">Inicio</NavLink>

                                </li>
                                <li class="list-inline-item mr-3">
                                    <NavLink to="/nosotros" activeClassName="active">Quiénes Somos</NavLink>
                                </li>
                                <li class="list-inline-item mr-3">
                                    <NavLink to="/registro" activeClassName="active">Regístrate</NavLink>
                                </li>
                                <li class="list-inline-item">
                                    <NavLink to="/login" activeClassName="active">Inicia Sesión</NavLink>

                                </li>
                            </ul>
                        </div>
                        <div class="col-xl-5 col-md-6 col-sm-6 col-12">
                            <ul
                                class="list-inline mb-0 d-flex justify-content-sm-end justify-content-center mr-sm-3 ml-sm-0 mx-3">
                                <li class="list-inline-item  mr-3">
                                    <p class="bottom-footer">2023 ©<a target="_blank"
                                        href="#">Yineska Verde</a></p>
                                </li>
                                <li class="list-inline-item align-self-center">
                                    <div class="scrollTop"><i class="flaticon-up-arrow-fill-1"></i></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}
export default Footer;