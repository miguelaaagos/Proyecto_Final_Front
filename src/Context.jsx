import React, { createContext, useState, useEffect } from 'react';

const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const handleLogin = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
  
      const response = await fetch('http://localhost:8080/iniciar-sesion', {
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
  
      if (!response.ok) {
        throw new Error(responseData.error || 'Hubo un problema al iniciar sesión.');
      }
  
      localStorage.setItem('loggedInUser', JSON.stringify(responseData.user));
  
      setLoggedInUser(responseData.user);
      return response;
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      setError(error.message || 'Error al procesar la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...carrito];
    const updatedItemIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (updatedItemIndex >= 0) {
      updatedCart[updatedItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    const updatedCartForLocalStorage = updatedCart.map(({ quantity, ...rest }) => rest);
    localStorage.setItem('cart', JSON.stringify(updatedCartForLocalStorage));

    setCarrito(updatedCart);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('user');
  };

  const removeFromCart = (productId) => {
    const updatedCart = carrito.filter((product) => product.id !== productId);
    setCarrito(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const incrementQuantity = (productId) => {
    const updatedCart = carrito.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCarrito(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decrementQuantity = (productId) => {
    const updatedCart = carrito.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCarrito(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart from localStorage:', cart);
    setCarrito(cart);
    localStorage.removeItem('cart');
  }, []);

  const contextValue = {
    loggedInUser,
    handleLogout,
    error,
    loading,
    handleLogin,
    carrito,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };

  return <ShoesContext.Provider value={contextValue}>{children}</ShoesContext.Provider>;
};

export { ShoesProvider, ShoesContext };




