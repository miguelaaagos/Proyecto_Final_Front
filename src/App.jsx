// App.js
import React from "react";
import Navbar from './Components/Navbar';
import Carrusel from './Components/Carrusel';
import Card from './Components/Card';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ShoesProvider } from "./Context";

function App() {
  return (
    <ShoesProvider>
      <>
        <Navbar />
        <Carrusel />
        <Card />
        <Header />
        <Footer />
      </>
    </ShoesProvider>
  );
}

export default App;
