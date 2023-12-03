import React, { useState } from 'react';
import ModalContent from './Login';

const ParentComponent = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <h1>Parent Component</h1>
      <button onClick={openModal}>Iniciar sesión</button>
      {isModalOpen && (
        <ModalContent
          setLoggedInUser={setLoggedInUser}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ParentComponent;
