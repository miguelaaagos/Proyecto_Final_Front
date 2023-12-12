import React, { useContext, useState } from 'react';
import { ShoesContext } from '../Context';
import { formatNumber } from '../Price';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';


const Carrito = () => {
  const { carrito, removeFromCart, incrementQuantity, decrementQuantity, isLoggedIn } = useContext(ShoesContext);
  const [showLogin, setShowLogin] = useState(false);

  const total = carrito.reduce((a, { precio = 0, cantidad = 0 }) => a + precio * cantidad, 0);

  const handleIrAPagar = () => {
    if (isLoggedIn) {
      removeFromCart();
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div className="container1">
      <Navbar /> 
      <div className="card detalles w-50 m-auto mt-5 p-5">
        <h5>Detalles del pedido:</h5>
        <div className="p-3 bg-white">
        {carrito.map((producto) => (
  <div key={producto.id} className="d-flex justify-content-between py-2">
    <div className="d-flex justify-content-between align-items-center">
      <img src={producto.imagen} width="50" alt="" />
      <h6 className="mb-0 text-capitalize p-2">{`${producto.marca} ${producto.modelo}`}</h6>
    </div>
    <div className="d-flex justify-content-end align-items-center">
      <h6 className="mb-0 p-2 text-success">
        ${formatNumber(producto.precio * producto.cantidad)}
      </h6>
      <button
        className="btn btn-secondary"
        onClick={() => decrementQuantity(producto.id)}
      >
        -
      </button>
      <b className="mx-2">{producto.cantidad}</b>
      <button
        className="btn btn-dark"
        onClick={() => incrementQuantity(producto.id)}
      >
        +
      </button>
    </div>
  </div>
))}
          <h2 className="my-4">Total: ${formatNumber(total)}</h2>
          <NavLink to="/successful" className="text-decoration-none">
            <button className="btn btn-success">
              Finalizar Comprar
            </button>
          </NavLink>
          <NavLink to="/" className="text-decoration-none">
            <button className="btn btn-primary mx-5">
              Seguir Comprando
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
