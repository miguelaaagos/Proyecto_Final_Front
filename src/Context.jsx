import React, { createContext, useState, useEffect } from 'react';

const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
  const [zapatillas, setZapatillas] = useState([]);  // Cambiado el nombre de 'shoes' a 'zapatillas'
  const [carrito, setCarrito] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const addToCart = ({ id, price, name, img }) => {
    setCarrito((prevCarrito) => {
      const productoEcontradoIndex = prevCarrito.findIndex((p) => p.id === id);

      if (productoEcontradoIndex >= 0) {
        return prevCarrito.map((producto, index) =>
          index === productoEcontradoIndex
            ? { ...producto, count: producto.count + 1 }
            : producto
        );
      } else {
        return [...prevCarrito, { id, price, name, img, count: 1 }];
      }
    });
  };

  const increment = (i) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto, index) =>
        index === i ? { ...producto, count: producto.count + 1 } : producto
      )
    );
  };

  const decrement = (i) => {
    setCarrito((prevCarrito) => {
      const { count } = prevCarrito[i];
      if (count === 1) {
        return prevCarrito.filter((_, index) => index !== i);
      } else {
        return prevCarrito.map((producto, index) =>
          index === i ? { ...producto, count: producto.count - 1 } : producto
        );
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ShoesContext.Provider
      value={{
        zapatillas,
        carrito,
        setCarrito,
        addToCart,
        increment,
        decrement,
        loggedInUser,
        setLoggedInUser,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export { ShoesProvider, ShoesContext };



