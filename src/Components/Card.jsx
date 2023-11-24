import { FaCartPlus } from "react-icons/fa"

export const Cards = () => {
  return (
    <>

      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://www.inseg.cl/upload/BOT%C3%8DN%20AZERO%20AMARILLO.png"
          className="card-img-top"
          alt="Zapatillas"
        />
        <div className="card-body">
          <h5 className="card-title">Zapatos UltimateX90</h5>
          <p className="card-text">
          Estilo y seguridad se fusionan en nuestros zapatos de seguridad elegantes. Diseñados para destacar en cualquier entorno
          </p>
          <p className="card-text">Precio: $120.990</p>
          <a href="#" className="btn btn-dark"> 
            Comprar
       </a> 
       <FaCartPlus className="" />
        </div>
      </div>
    </>
  )
}


export default Cards;