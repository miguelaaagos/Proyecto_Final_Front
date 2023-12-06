import React from 'react';
import Navbar from '../Components/Navbar';
import Carrucel from '../Components/Carrusel';
import Card from '../Components/Card';

function Home() {
  return (
    <div>
       <Navbar /> 
      <Carrucel />
      <Card />
    </div>
  );
}

export default Home;