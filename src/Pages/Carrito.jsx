import React, { useContext, useState } from 'react';
import { ShoesContext } from '../Context';
import { formatNumber } from '../Price';
import { NavLink } from 'react-router-dom';

const Carrito = () => {
  const { carrito, removeFromCart, incrementQuantity, decrementQuantity, isLoggedIn } = useContext(ShoesContext);
  const [showLogin, setShowLogin] = useState(false);

  console.log('Estado del carrito en Carrito component:', carrito);

  return (
    <div className="container1">
      <div className="card detalles w-50 m-auto mt-5 p-5">
        <h5>Detalles del pedido:</h5>
        <div className="p-3 bg-white">
          {carrito.map((cartItem, index) => {
            const product = cartItem[0];

            return (
              <div key={index} className="d-flex justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                  {product && (
                    <>
                      <img src={product.imagen} width="50" alt="" />
                      <h6 className="mb-0 text-capitalize p-2">{`${product.año} ${product.marca} ${product.modelo}`}</h6>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  {product && (
                    <>
                      <h6 className="mb-0 p-2 text-success">
                        ${formatNumber(product.precio * cartItem.quantity)}
                      </h6>
                      <button
                        className="btn btn-secondary"
                        onClick={() => decrementQuantity(product.id)}
                      >
                        -
                      </button>
                      <b className="mx-2">{cartItem.quantity}</b>
                      <button
                        className="btn btn-dark"
                        onClick={() => incrementQuantity(product.id)}
                      >
                        +
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
          <h2 className="my-4">Total: ${formatNumber(
            carrito.reduce((acc, cartItem) => (cartItem[0] ? acc + cartItem[0].precio * cartItem.quantity : acc), 0)
          )}</h2>
          <NavLink to="/successful" className="text-decoration-none">
            <button className="btn btn-success">
              Finalizar Compra
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


