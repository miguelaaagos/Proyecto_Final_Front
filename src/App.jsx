import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import DetailsProduct from "./Pages/DetailsProduct";
import Footer from "./Components/Footer";
import Carrito from "./Pages/Carrito";
import RegisterProduct from "./Pages/RegisterProduct";
import LoginUsers from "./Pages/LoginUsers";
import ForgottenPassword from "./Pages/ForgottenPassword";
import PerfilUsers from "./Pages/PerfilUsers";
import NotFound from "./Pages/NotFound";
import DetailsUsers from "./Pages/DetailsUsers";
import Successful from "./Pages/Successful";
import NavbarAuth from "./Pages/NavbarAuth";
import NavbarGuest from "./Pages/NavbarGuest";
import { ShoesContext } from "./Context";
import './index.css';
import Paymentgateway from "./Pages/Paymentgateway";

function App() {
  const [contextReady, setContextReady] = useState(false);
  const { loggedInUser } = useContext(ShoesContext);

  useEffect(() => {
    setContextReady(true);
  }, []);

  const checkAuthStatus = () => {
    return contextReady && loggedInUser;
  };

  return (
    <BrowserRouter>
      {checkAuthStatus() ? <NavbarAuth /> : <NavbarGuest />}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detalles/:id" element={<DetailsProduct />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/registerproduct" element={<RegisterProduct />} />
        <Route path="/loginusers" element={<LoginUsers />} />
        <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        <Route path="/perfilusers" element={<PerfilUsers />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detailsusers" element={<DetailsUsers />} />
        <Route path="/successful" element={<Successful />} />
        <Route path="/tarjeta" element={<Paymentgateway />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


