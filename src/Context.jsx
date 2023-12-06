import React, { createContext, useState, useEffect } from 'react';

const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
  const [zapatillas, setZapatillas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getZapatillas = async () => {
      try {
        const res = await fetch('http://localhost:5000/publicacion');
        const zapatillasData = await res.json();
        setZapatillas(zapatillasData.publicaciones);
      } catch (error) {
        console.error('Error fetching zapatillas:', error);
      }
    };

    getZapatillas();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setLoggedInUser(responseData.user); // Asegúrate de que la respuesta contenga la información del usuario
        setIsModalOpen(false);
      } else {
        console.error('Error al iniciar sesión:', responseData.message);
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    zapatillas,
    carrito,
    setCarrito,
    login,
    loggedInUser,
    isModalOpen,
    setIsModalOpen,
  };

  return <ShoesContext.Provider value={contextValue}>{children}</ShoesContext.Provider>;
};

export { ShoesProvider, ShoesContext };


