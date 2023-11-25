// Card.js
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ShoesContext } from "../Context"; // Asegúrate de tener la ruta correcta

const Card = () => {
  const { shoes, carrito, setCarrito } = useContext(ShoesContext);

  console.log("Datos de zapatillas en Card:", shoes);

  const addToCart = (zapatilla) => {
    setCarrito([...carrito, zapatilla]);
  };

  return (
    <div className="card-container d-flex flex-wrap justify-content-around">
      {shoes.map((zapatilla) => (
        <div key={zapatilla.id} className="card m-3 p-3" style={{ width: "18rem" }}>
          <img
            src={zapatilla.imagen}
            className="card-img-top"
            alt={`Zapatillas ${zapatilla.modelo}`}
          />
          <div className="card-body">
            <h5 className="card-title">{`${zapatilla.marca} ${zapatilla.modelo}`}</h5>
            <p className="card-text">{`Año: ${zapatilla.año}`}</p>
            <p className="card-text">{`Precio: $${zapatilla.precio.toFixed(2)}`}</p>
            <button className="btn btn-dark" onClick={() => addToCart(zapatilla)}>
              Comprar
            </button>
            <FaCartPlus style={{ marginLeft: "10px" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

