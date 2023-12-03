import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import { ShoesProvider } from "./Context";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import DetailsCart from "./Pages/DetailsCart";
import DetailsProduct from "./Pages/DetailsProduct";
import Footer from "./Components/Footer";
import Carrito from "./Pages/Carrito";
import RegisterProduct from "./Pages/RegisterProduct";
import LoginUsers from "./Pages/LoginUsers";
import ForgottenPassword from "./Pages/ForgottenPassword";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <ShoesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/detailscart" element={<DetailsCart />} />
          <Route path="/detalles/:id" element={<DetailsProduct />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registerproduct" element={<RegisterProduct />} />
          <Route path="/loginusers" element={<LoginUsers />} />
          <Route path="/forgottenpassword" element={<ForgottenPassword />} />
        </Routes>
      </ShoesProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

