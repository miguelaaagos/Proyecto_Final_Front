import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
export default function ProductosForm() {
    const [producto, setProducto] = useState({
        codigo: '',
        id_categoria: '',
        id_vendedor: '',
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        imagen: '',
    });
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const params = useParams();
    const navigate = useNavigate()
    //Enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (editing) {
            await fetch(`http://localhost:3001/productos/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(producto),
                headers: { 'Content-Type': 'application/json' }
            });
            
        } else {
            //Petición al Backend
            await fetch('http://localhost:3001/productos', {
                method: 'POST',
                body: JSON.stringify(producto),
                headers: { 'Content-Type': 'application/json' }
            });
        }


        setLoading(false)
        navigate('/productosadmin')
    };
    // Recibir los datos de los input ;)
    const handleChange = (e) =>
        setProducto({ ...producto, [e.target.name]: e.target.value });

    const loadProducto = async (id) => {
        const res = await fetch(`http://localhost:3001/productos/${id}`);
        const data = await res.json()
        setProducto({ codigo: data.codigo, id_categoria: data.id_categoria, id_vendedor: data.id_vendedor, nombre: data.nombre, descripcion: data.descripcion, precio: data.precio, stock: data.stock, imagen: data.imagen })
        setEditing(true)
    };
    useEffect(() => {
        if (params.id) {
            loadProducto(params.id);
        }
    }, [params.id])

    return (

        <div className="row">

            <div className="col-lg-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="statbox widget box box-shadow">

                    <div className="widget-content widget-content-area">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <label for="exampleFormControlInput1">Nombre</label>
                                <input type="txt" name="nombre" value={producto.nombre} onChange={handleChange} className="form-control" placeholder="Nombre del Producto" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="exampleFormControlTextarea1">Descripción</label>
                                <textarea className="form-control" value={producto.descripcion} name="descripcion" onChange={handleChange} rows="3"></textarea>
                            </div>
                            <div className="form-group mb-4">
                                <label for="exampleFormControlInput1">Código</label>
                                <input type="txt" name="codigo" value={producto.codigo} onChange={handleChange} className="form-control" placeholder="Código del Producto" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="exampleFormControlInput1">Precio</label>
                                <input type="txt" className="form-control" value={producto.precio} name="precio" onChange={handleChange} placeholder="Precio" />
                            </div>

                            <div className="form-group mb-4">
                                <label for="exampleFormControlInput1">Stock</label>
                                <input type="txt" className="form-control" value={producto.stock} name="stock" onChange={handleChange} placeholder="Stock" />
                            </div>

                            <div className="form-group mb-4">
                                <label for="exampleFormControlSelect1">Categoría</label>
                                <select className="form-control" value={producto.id_categoria} name="id_categoria" onChange={handleChange}>
                                    <option>Seleccione</option>
                                    <option value="1">Suplementos</option>
                                    <option value="2">Vitaminas</option>

                                </select>
                            </div>

                            <div className="form-group mb-4">
                                <label for="exampleFormControlSelect1">Vendedor</label>
                                <select className="form-control" name="id_vendedor" value={producto.vendedor} onChange={handleChange}>
                                    <option>Seleccione</option>
                                    <option value="1">Yineska Verde</option>

                                </select>
                            </div>

                            <div className="form-group mb-4">
                                <label for="exampleFormControlInput1">URL Imagen</label>
                                <input type="txt" className="form-control" name="imagen" onChange={handleChange} placeholder="" value={producto.imagen} />
                            </div>

                            <button class="btn btn-secondary btn-rounded mb-4 mr-2" type="submit">{loading ? 'Cargando...' : 'Guardar'}</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}