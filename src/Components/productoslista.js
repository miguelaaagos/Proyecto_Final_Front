import { useEffect, useState } from 'react';

export default function Productolista() {

    const [productos, setProductos] = useState([]);
   

    const loadProductos = async () => {
        const response = await fetch('http://localhost:3001/productos')
        const data = await response.json()
        setProductos(data)

    }
    useEffect(() => {
        loadProductos()
    }, [])


    return (
        <>
           
            {
                productos.map((producto) => (
                    <div className="widget-content-area m-2">

                    <div className="card">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-xl-12 text-center">

                                    <img alt="image-product"
                                        src={producto.imagen} className="img-fluid" />
                                </div>
                                <div className="col-xl-12 text-center">
                                    <h4 className="card-title">{producto.nombre}</h4>
                                    <p className="card-text px-3">{producto.descripcion}</p>
                                    <p className="card-text1">{producto.precio}</p>
                                </div>
                                <div className="col-xl-12 text-left card-bottom-section">
                                    <button className="btn mb-2">Agregar al carro</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   </div>
                    

                )

                )
            }
        </>

    )

}