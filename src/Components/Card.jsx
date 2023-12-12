import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoesContext } from "../Context";

const Card = () => {
  const { carrito, addToCart, loggedInUser } = useContext(ShoesContext);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/publicacion");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setShoes(data);
          } else {
            console.error("Los datos del servidor no son un array:", data);
          }
        } else {
          console.error("Error al obtener datos de zapatillas");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };

    fetchShoes();
  }, []);

  const handleAddToCart = (zapatilla) => {
    if (loggedInUser) {
      const existingItem = carrito.find((item) => item.id === zapatilla.id);

      if (existingItem) {
        // Si el artículo ya está en el carrito, actualizar la cantidad
        addToCart({
          ...zapatilla,
          cantidad: existingItem.cantidad + 1,
        });
      } else {
        // Si el artículo no está en el carrito, agregarlo
        addToCart({
          ...zapatilla,
          cantidad: 1,
        });
      }
    } else {
      console.log('Usuario no autenticado. Redirigir a la página de inicio de sesión.');
    }
  };

  return (
    <div className="row">
      <div className="card-container d-flex flex-wrap justify-content-around mb-4">
        {shoes.map((zapatilla) => (
          <div key={zapatilla.id} className="card m-3 p-3" style={{ width: "18rem" }}>
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
                onClick={() => handleAddToCart(zapatilla)}
                disabled={!loggedInUser}
              >
                Comprar
              </button>
              <Link to={`/detalles/${zapatilla.id}`} className="btn btn-primary">
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
