import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ShoesProvider } from "./Context";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import DetailsCart from "./Pages/DetailsCart";
import DetailsProduct from "./Pages/DetailsProduct";


function App() {
  return (
    <BrowserRouter>
      <ShoesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detailscart" element={<DetailsCart />} />
          <Route path="/detalles/:id" element={<DetailsProduct />} />
        </Routes>
      </ShoesProvider>
    </BrowserRouter>
  );
}

export default App;

