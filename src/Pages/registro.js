import React, { Fragment } from 'react';
import Usuariosform from '../components/usuariosform';

function Registro() {
    return (
        <Fragment>
            <head>
                <link href="assets/css/users/register-1.css" rel="stylesheet" type="text/css" />
            </head>
            <body className="register">
                
                    <Usuariosform />
                    
                
            </body>
        </Fragment>
    )
}
export default Registro;