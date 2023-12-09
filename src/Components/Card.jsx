import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoesContext } from "../Context";

const Card = () => {
  const { carrito, setCarrito } = useContext(ShoesContext);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/publicacion");
        if (response.ok) {
          const data = await response.json();
          setShoes(data);
        } else {
          console.error("Error al obtener datos de zapatillas");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };

    fetchShoes();
  }, []);

  const addToCart = (zapatilla) => {
    const existingItem = carrito.find((item) => item.id === zapatilla.id);

    if (existingItem) {
      const updatedCarrito = carrito.map((item) =>
        item.id === zapatilla.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(updatedCarrito);
    } else {
      setCarrito([...carrito, { ...zapatilla, cantidad: 1 }]);
    }
  };

  return (
    <div className="row">
      <div className="card-container d-flex flex-wrap justify-content-around mb-4">
        {shoes.map((zapatilla) => (
          <div
            key={zapatilla.id}
            className="card m-3 p-3"
            style={{ width: "18rem" }}
          >
            <img
              src={zapatilla.imagen}
              className="card-img-top"
              alt={`Zapatillas ${zapatilla.modelo}`}
            />
            <div className="card-body">
              <h5 className="card-title">{`${zapatilla.marca}`}</h5>
              <p className="card-text">{`Modelo: ${zapatilla.modelo}`}</p>
              <p className="card-text">{`Año: ${zapatilla.año}`}</p>
              <p className="card-text">{`Precio: $${zapatilla.precio}`}</p>
                <button
                  className="btn btn-success mx-2"
                  onClick={() => addToCart(zapatilla)}
                >
                  Comprar
                </button>
                <Link
                  to={`/detalles/${zapatilla.id}`}
                  className="btn btn-primary"
                >
                  Detalles
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
