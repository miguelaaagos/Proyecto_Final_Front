import React, { createContext, useState, useEffect } from 'react';

const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const getShoes = async () => {
      try {
        const res = await fetch('http://localhost:5000/publicacion');
        const shoesData = await res.json();
        setShoes(shoesData.publicaciones);
      } catch (error) {
        console.error('Error fetching shoes:', error);
      }
    };

    getShoes();
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

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ShoesContext.Provider
      value={{
        shoes,
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

