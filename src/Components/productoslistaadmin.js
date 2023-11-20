import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
export default function Productolistaadmin() {

    const [productos, setProductos] = useState([])
    const navigate = useNavigate();

    const loadProductos = async () => {
        const response = await fetch('http://localhost:3001/productos')
        const data = await response.json()
        setProductos(data)

    }

    
    useEffect(() => {
        loadProductos()
    }, [])

    //Eliminar Producto
    const handleDelete = async (id) => {
        
        const res = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE",
        });
        setProductos(productos.filter((producto) => producto.id !== id));

        
    };


    return (
        <>

            {
                productos.map((producto) => (
                    <div className="widget-content-area m-2">

                        <div className="card" key={producto.id}>
                            <div className="wrapper">
                                <div className="row">
                                    <div className="col-md-12 text-center">

                                        <img alt="image-product"
                                            src={producto.imagen} className="img-fluid" />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <h4 className="card-title">{producto.nombre}</h4>
                                        <p className="card-text px-3">{producto.descripcion}</p>
                                        <p className="card-text1">{producto.precio}</p>
                                    </div>
                                    <div className="col-xl-12 text-left card-bottom-section">

                                        <button class="btn btn-primary btn-rounded mb-4 mr-2" onClick={() => navigate(`/agregar/${producto.id}/edit`)}>Editar</button>
                                        <button class="btn btn-warning btn-rounded mb-4 mr-2" onClick={() => handleDelete(producto.id)}>Eliminar</button>
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