import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import DetailsCart from "./Pages/DetailsCart";
import DetailsProduct from "./Pages/DetailsProduct";
import Footer from "./Components/Footer";
import Carrito from "./Pages/Carrito";
import RegisterProduct from "./Pages/RegisterProduct";
import LoginUsers from "./Pages/LoginUsers";
import ForgottenPassword from "./Pages/ForgottenPassword";
import PerfilUsers from "./Pages/PerfilUsers";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import DetailsUsers from "./Pages/DetailsUsers";
import Successful from "./Pages/Successful";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detailscart" element={<DetailsCart />} />
          <Route path="/detalles/:id" element={<DetailsProduct />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registerproduct" element={<RegisterProduct />} />
          <Route path="/loginusers" element={<LoginUsers />} />
          <Route path="/forgottenpassword" element={<ForgottenPassword />} />
          <Route path="/perfilusers" element={<PerfilUsers />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detailsusers" element={<DetailsUsers />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

