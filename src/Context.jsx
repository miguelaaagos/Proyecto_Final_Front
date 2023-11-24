import { createContext, useState, useEffect } from "react";

const ShoesContext = createContext();

const ShoesProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getShoes = async () => {
    const res = await fetch("/zapatillas.json");
    const shoes = await res.json();
    setShoes(shoes);
  };

  useEffect(() => {
    getShoes();
    console.log("Datos de zapatillas cargados:", shoes);
  }, []);

  return (
    <ShoesContext.Provider
      value={{ shoes, carrito, setCarrito }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export { ShoesProvider, ShoesContext };
