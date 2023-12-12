import React, { useState, useEffect, useContext } from 'react';
import backgroundImage from '../assets/img/users.jpg';
import { ShoesContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { Col, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const DetailsUsers = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [postIdToModify, setPostIdToModify] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedPostData, setEditedPostData] = useState({});
  const { loggedInUser } = useContext(ShoesContext);
  const navigate = useNavigate();

  const showUserPosts = async () => {
      try {
      const postsResponse = await fetch(`http://127.0.0.1:5000/publicacion`);
      const userPostsJson = await postsResponse.json();
      setUserPosts(userPostsJson);
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    });

    if (result.isConfirmed) {
      try {
        await fetch(`http://127.0.0.1:5000/publicacion/${postId}`, {
          method: 'DELETE',
        });
        showUserPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  const handleModifyPost = (postId) => {
    const postToEdit = userPosts.find((post) => post.id === postId);
    setEditedPostData(postToEdit);
    setPostIdToModify(postId);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setPostIdToModify(null);
    setEditedPostData({});
  };

  const handleSaveEditedPost = async () => {
    try {
      await fetch(`http://127.0.0.1:5000/publicacion/${postIdToModify}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedPostData),
      });

      setShowEditModal(false);
      setPostIdToModify(null);
      setEditedPostData({});

      Swal.fire({
        icon: 'success',
        title: '¡Publicación editada!',
        showConfirmButton: false,
        timer: 1500,
      });

      showUserPosts();
    } catch (error) {
      console.error('Error modifying post:', error);
    }
  };

  const handleNewPost = () => {
    navigate('/registerproduct');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (loggedInUser) {
      showUserPosts();
    }
  }, [loggedInUser]);

  if (!loggedInUser) {
    return <p>No hay un usuario autenticado.</p>;
  }

  return (
    <div className='text-center'>
      <img src={backgroundImage} alt="404" style={{ height: '200px' }} />
      <h1>Usuario: {loggedInUser.Username}</h1>
      <div className="mx-auto d-flex align-items-center">
        <Col xs="auto">
          <Button type="submit">
            <BiSearch style={{ textDecoration: 'none' }} />
          </Button>
        </Col>
      </div>
      <div>
        <button className="btn btn-success btn-lg btn-block m-3" onClick={handleNewPost}>
          Nueva Publicación
        </button>
        <button className="btn btn-dark btn-lg btn-block m-3" onClick={handleGoHome}>
          Ir al Home
        </button>
      </div>
      <div>
        <h2>Publicaciones del Usuario</h2>
        {userPosts.map((post) => (
          <div key={post.id}>
            <div className="d-flex justify-content-between mx-5 px-5">
              <img src={post.imagen} alt={`Imagen de ${post.marca} ${post.modelo}`} style={{ height: '100px' }} />
              <p>Marca: {post.marca}</p>
              <p>Modelo: {post.modelo}</p>
              <p>Año: {post.año}</p>
              <p>Precio: {post.precio}</p>
              <div>
                <button className="btn btn-danger mx-2" onClick={() => handleDeletePost(post.id)}>
                  Eliminar
                </button>
                <button className="btn btn-primary ml-2" onClick={() => handleModifyPost(post.id)}>
                  Modificar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formMarca">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la marca"
                value={editedPostData.marca || ''}
                onChange={(e) => setEditedPostData({ ...editedPostData, marca: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formModelo">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el modelo"
                value={editedPostData.modelo || ''}
                onChange={(e) => setEditedPostData({ ...editedPostData, modelo: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formAño">
              <Form.Label>Año</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el año"
                value={editedPostData.año || ''}
                onChange={(e) => setEditedPostData({ ...editedPostData, año: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
                value={editedPostData.precio || ''}
                onChange={(e) => setEditedPostData({ ...editedPostData, precio: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formImagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={editedPostData.imagen || ''}
                onChange={(e) => setEditedPostData({ ...editedPostData, imagen: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveEditedPost}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailsUsers;
