import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import backgroundImage from "../assets/img/Modal.jpg";

const PromoModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const modalShownBefore = localStorage.getItem('modalShownBefore');

    if (!modalShownBefore) {
      setShowModal(true);
      localStorage.setItem('modalShownBefore', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setShowModal(false);
    }, 1000);
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton style={{ border: 'none', position: 'absolute', top: 0, right: 0, margin: '10px' }}>
          <Button variant="link" onClick={handleClose}>X</Button>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <img src={backgroundImage} alt="Cupón Promocional" style={{ width: '100%', height: 'auto' }} onClick={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PromoModal;