import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoesContext } from "../Context";

const CardDetalles = () => {
  const { id } = useParams();
  const { shoes, addToCart } = useContext(ShoesContext);
  const zapatilla = shoes.find((item) => item.id === parseInt(id));

  if (!zapatilla) {
    return <div>No se encontraron detalles para esta zapatilla.</div>;
  }

  return (
    <div className="card m-3 p-3 mx-auto" style={{ maxWidth: "500px" }}>
      <div className="img-container">
        <img
          src={zapatilla.imagen}
          className="card-img-top"
          alt={`Zapatillas ${zapatilla.modelo}`}
          style={{ width: "250px", height: "auto" }}
        />
      </div>
      <div className="card-detalles ms-3">
        <div className="card-body">
          <h5 className="card-title">{`${zapatilla.marca} ${zapatilla.modelo}`}</h5>
          <p className="card-text">{`Descripción: ${zapatilla.descripcion}`}</p>
        </div>
      </div>
      <div className="btn align-itens-center">
        <button className="btn btn-primary" onClick={() => addToCart(zapatilla)}>
          Comprar
        </button>
        <Link to="/">
          <button className="btn btn-primary">
            Ir al Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetalles;


