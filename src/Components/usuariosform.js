import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Usuariosform() {
    const [usuario, setUsuario] = useState({
       
        rut: '',
        nombre: '',
        apellido: '',
        correo: '',
        contrasena: '',
        direccion: '',
        ciudad: '',
        region: '',
        telefono: '',
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
            await fetch(`http://localhost:3001/usuarios/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(usuario),
                headers: { 'Content-Type': 'application/json' }
            });
            
        } else {
            //Petición al Backend
            await fetch('http://localhost:3001/usuarios', {
                method: 'POST',
                body: JSON.stringify(usuario),
                headers: { 'Content-Type': 'application/json' }
            });
        }


        setLoading(false)
        navigate('/login')
    };
    // Recibir los datos de los input ;)
    const handleChange = (e) =>
        setUsuario({ ...usuario, [e.target.name]: e.target.value });

    const loadUsuario = async (id) => {
        const res = await fetch(`http://localhost:3001/usuarios/${id}`);
        const data = await res.json()
        setUsuario({ rut: data.rut, nombre: data.nombre, apellido: data.apellido, contrasena: data.contrasena, direccion: data.direccion, ciudad: data.ciudad, region: data.region, correo: data.correo, telefono: data.telefono })
        setEditing(true)
    };
    useEffect(() => {
        if (params.id) {
            loadUsuario(params.id);
        }
    }, [params.id])

    return (
        <form className="form-register" onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-12 text-center mb-2">
                <img alt="logo" src="assets/img/logo_fys.png" className="theme-logo" width="200px" />
            </div>
            <div className="col-md-12">
           
                <label className="">Nombre</label>
                <input name="nombre" value={usuario.nombre} onChange={handleChange} type="text" className="form-control mb-4" placeholder="Nombre" required />
                <label className="">Apellido</label>
                <input name="apellido" value={usuario.apellido} onChange={handleChange} type="text"  className="form-control mb-4" placeholder="Apellido" required />
                <label  className="">RUT</label>
                <input name="rut" value={usuario.rut} onChange={handleChange} type="text"  className="form-control mb-4" placeholder="Apellido" required />
                <label  className="">Direccion</label>
                <input name="direccion" value={usuario.direccion} onChange={handleChange} type="text"  className="form-control mb-4" placeholder="Apellido" required />
                <label  className="">Ciudad</label>
                <input name="ciudad" value={usuario.ciudad} onChange={handleChange} type="text"  className="form-control mb-4" placeholder="Apellido" required />
                <label  className="">Región</label>
                <input name="region" value={usuario.region} onChange={handleChange} type="text" className="form-control mb-4" placeholder="Apellido" required />
                <label  className="">Teléfono</label>
                <input name="telefono" value={usuario.telefono} onChange={handleChange} type="text"  className="form-control mb-4" placeholder="Apellido" required />
                <label  className="">Correo</label>
                <input name="correo" value={usuario.correo} onChange={handleChange} type="email"  className="form-control mb-4" placeholder="Correo" required />
                <label  className="">Contraseña</label>
                <input name="contrasena" value={usuario.contrasena} onChange={handleChange} type="password"  className="form-control mb-5" placeholder="Contraseña" required />


                <button className="btn btn-lg btn-outline-dark btn-block btn-rounded mb-3" type="submit">{loading ? 'Cargando...' : 'Guardar'}</button>


                <NavLink to="/login" activeClassName="active" className="btn btn-lg btn-outline-dark btn-block btn-rounded mb-3">Inicia Sesión</NavLink>
            
            
            <p className="text-center">© Yineska Verde 2023 </p>
        
            </div>
        </div>
        </form>
       


    )
}