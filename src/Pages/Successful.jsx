import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/img/CompraExitosa.jpeg";

const Successful = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown, navigate]);

  return (
    <div className="container container1">
      <div className="text-center">
        <img src={backgroundImage} alt="Successful" className="w-50" />
        <p>
          <h1>Gracias por su Compra</h1>
          <h3>
            La factura de la compra se ha enviado a su correo electrónico.
          </h3>
          <h4>
            En {countdown} Segundos será redirigido a la página principal para
            que siga comprando
          </h4>
        </p>
      </div>
    </div>
  );
};

export default Successful;
