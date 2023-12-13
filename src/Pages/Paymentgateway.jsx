import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const Paymentgateway = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.replace(/\D/g, "").slice(0, 16);
    const maskedValue = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setValue(maskedValue);
  };
  const [date, setDate] = useState("");
  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    let formattedDate = inputDate;
    if (inputDate.length === 2) {
      formattedDate += "/";
    }
    setDate(formattedDate);
  };
  return (
    <div className="container container1">
      <form className="w-50 bg-light mb-4 mx-auto">
        <div className="card" id="form">
          <div className="card-header text-center">
            <strong className="fs-4">Formulario de Pago</strong>
          </div>
          <div className="card-body">
            <div className="mt-3 mb-3">
              <label htmlFor="Numeros" className="form-label fs-6">
                Número de tarjeta
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Número de tarjeta"
                value={value}
                onChange={handleChange}
                pattern="[0-9]*"
                maxLength="19"
                required
              />
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="text" className="form-label fs-6">
                <span style={{ float: "left" }}>Nombre y apellido</span>
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Nombre y apellido"
                pattern="[a-zA-Z\s]+"
                title="Ingrese solo letras"
                required
                onKeyDown={(event) => {
                  if (!event.key.match(/[a-zA-Záéíóúñ\s]/g)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <div className="col-12 mb-5 mt-4">
              <div style={{ display: "flex", gap: "35px" }}>
                <div>
                  <label htmlFor="username" className="form-label fs-6">
                    Fecha de vencimiento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="MM/AAAA"
                    pattern="\d{2}/\d{4}"
                    maxLength="7"
                    value={date}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                <div>
                  <div>
                    <label htmlFor="username" className="form-label fs-6">
                      Código de seguridad
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="CVV"
                      maxLength="3"
                      pattern="[0-9]{3}"
                      required
                      style={{ width: "100px" }}
                    />
                  </div>
                </div>
                <div className="d-inline-block p-2 rounded mt-2 ml-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethods"
                      id="mastercard"
                      value="mastercard"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="mastercard">
                      Tarjeta de Debito
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethods"
                      id="visa"
                      value="visa"
                    />
                    <label className="form-check-label" htmlFor="visa">
                      Tarjeta de Crédito
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card-footer"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <button type="submit" className="btn btn-secondary mr-3">
              Cancelar
            </button>
            <div style={{ marginRight: "1rem" }}></div>
            <NavLink to="/successful" className="text-decoration-none">
              <button type="submit" className="btn btn-primary">
                Realizar Pago
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Paymentgateway;
