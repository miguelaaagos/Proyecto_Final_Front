import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoesContext } from '../Context';
import { formatNumber } from '../Price';

const Carrito = () => {
  const { carrito, increment, decrement } = useContext(ShoesContext);
  const total = carrito.reduce((a, { precio, cantidad }) => a + precio * cantidad, 0);

  return (
    <div className="carrito p-5">
      <div className="detalles bg-light w-75 m-auto p-5">
        <h5>Detalles del pedido:</h5>
        <div className="p-3 bg-white">
          {carrito.map((producto, i) => (
            <div key={i} className="d-flex justify-content-between py-2">
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
                  onClick={() => decrement(i)}
                >
                  -
                </button>
                <b className="mx-2">{producto.cantidad}</b>
                <button
                  className="btn btn-dark"
                  onClick={() => increment(i)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h2 className="my-4">Total: ${formatNumber(total)}</h2>
          <Link to="/" className="logo-nombre mx-1 mb-0">
            <button className="btn btn-success">Ir a Pagar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
