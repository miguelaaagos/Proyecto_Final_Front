import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/img/users.jpg';

const DetailsUsers = () => {
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('personalData');

  const showPersonalData = () => {
    setActiveTab('personalData');
  };

  const showPosts = async () => {
    setActiveTab('posts');
    try {
      const userResponse = await fetch('http://127.0.0.1:5000/usuario');
      const userDataJson = await userResponse.json();
      setUserData(userDataJson);

      // Obtener publicaciones del usuario desde tu API (reemplaza la URL con la correcta)
      const postsResponse = await fetch('http://127.0.0.1:5000/publicacion');
      const userPostsJson = await postsResponse.json();
      setUserPosts(userPostsJson);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <div className='text-center'>
      <img src={backgroundImage} alt="404" style={{ height: '200px' }} />
      <h1>Usuario: {userData?.nombre}</h1>
      <div>
        <button className="btn btn-primary btn-lg btn-block m-5" onClick={showPersonalData}>
          Datos Personales
        </button>
        <button className="btn btn-primary btn-lg btn-block" onClick={showPosts}>
          Publicaciones
        </button>
      </div>

      {activeTab === 'personalData' && userData && (
        <div>
          <h2>Datos Personales del Usuario</h2>
          <p>Nombre: {userData.name}</p>
          <p>Correo Electrónico: {userData.password}</p>
        </div>
      )}

      {activeTab === 'posts' && (
        <div>
          <h2>Publicaciones del Usuario</h2>
          {userPosts.map((post) => (
            <div key={post.id} className="my-3">
              <img src={post.imagen} alt={`Imagen de ${post.marca} ${post.modelo}`} style={{ height: '100px' }} />
              <p>Marca: {post.marca}</p>
              <p>Modelo: {post.modelo}</p>
              <p>Año: {post.año}</p>
              <p>Precio: {post.precio}</p>
              <button className="btn btn-danger btn-block mx-3" onClick={() => handleDeletePost(post.id)}>
                Eliminar
              </button>
              <button className="btn btn-primary btn-block" onClick={() => handleModifyPost(post.id)}>
                Modificar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsUsers;





