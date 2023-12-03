import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoesContext } from "../Context";

const CardDetalles = () => {
  const { id } = useParams();
  const { getZapatillaById, addToCart } = useContext(ShoesContext);
  const [zapatilla, setZapatilla] = useState(null);

  useEffect(() => {
    const fetchZapatillaDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/publicacion/${id}`);
        if (response.ok) {
          const data = await response.json();
          setZapatilla(data);
        } else {
          console.error('Error al obtener detalles de la zapatilla');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    if (!getZapatillaById) {
      fetchZapatillaDetails();
    } else {
      const zapatillaById = getZapatillaById(parseInt(id));
      setZapatilla(zapatillaById);
    }
  }, [id, getZapatillaById]);

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



