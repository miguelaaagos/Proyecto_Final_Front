import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShoesContext } from "../Context";

const CardDetalles = () => {
  const { id } = useParams();
  const { shoes } = useContext(ShoesContext);
  const zapatilla = shoes.find((item) => item.id === parseInt(id));

  if (!zapatilla) {
    return <div>No se encontraron detalles para esta zapatilla.</div>;
  }

  return (
    <div className="card m-3 p-3" style={{ width: "18rem" }}>
      <img
        src={zapatilla.imagen}
        className="card-img-top"
        alt={`Zapatillas ${zapatilla.modelo}`}
      />
      <div className="card-body">
        <h5 className="card-title">{`${zapatilla.marca} ${zapatilla.modelo}`}</h5>
        <p className="card-text">{`Año: ${zapatilla.año}`}</p>
        <p className="card-text">{`Precio: $${zapatilla.precio.toFixed(2)}`}</p>
        <p className="card-text">{`Descripción: ${zapatilla.descripcion}`}</p>
      </div>
    </div>
  );
};

export default CardDetalles;
