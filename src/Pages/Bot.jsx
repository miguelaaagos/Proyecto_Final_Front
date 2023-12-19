import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // Asegúrate de cambiar la URL al servidor de tu backend

const MainPage = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);

  const handleShowMessageModal = () => {
    setShowMessageModal(true);
  };

  const handleShowChatModal = () => {
    setShowMessageModal(false);
    setShowChatModal(true);
  };

  const handleCloseModals = () => {
    setShowMessageModal(false);
    setShowChatModal(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShowMessageModal}>
        <i className="fas fa-comment"></i> Mensaje
      </button>
      <Modal show={showMessageModal} onHide={handleCloseModals}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contenido del mensaje...
          <button className="btn btn-primary" onClick={handleShowChatModal}>
            Iniciar Chat
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showChatModal} onHide={handleCloseModals} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Chat con el Bot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModals}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MainPage;
