import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Perfil = () => {
  const { userId } = useParams();

  return (
    <div className="container mt-5">
      <h2>Perfil del Usuario</h2>
      <p>Nombre de usuario: {userId}</p>
      <div>
        <Link to={`/perfil/${userId}/datos`} className="btn btn-primary mr-2">
          Datos del Usuario
        </Link>
        <Link to={`/perfil/${userId}/publicaciones`} className="btn btn-secondary">
          Publicaciones del Usuario
        </Link>
      </div>
    </div>
  );
};

export default Perfil;

