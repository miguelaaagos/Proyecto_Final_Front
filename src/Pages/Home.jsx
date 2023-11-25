import React from 'react';
import Navbar from '../Components/Navbar';
import Carrucel from '../Components/Carrusel';
import Card from '../Components/Card';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Carrucel />
      <Card />
        <Footer />
    </div>
  );
}

export default Home;