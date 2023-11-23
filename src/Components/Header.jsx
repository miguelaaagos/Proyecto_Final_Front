import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const MyHeader = () => {
  return (
    <header>
      <Container>
        <div className="d-flex justify-content-between">
          <Card bg="transparent" text="dark" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Elige cómo pagar</Card.Title>
              <Card.Text>
                Descubre las opciones de pago disponibles.
              </Card.Text>
              <Card.Link href="#elige-como-pagar">Ir a la página</Card.Link>
            </Card.Body>
          </Card>
          <Card bg="transparent" text="dark" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Compra Protegida</Card.Title>
              <Card.Text>
                Tu compra está protegida. Conoce nuestros términos.
              </Card.Text>
              <Card.Link href="#compra-protegida">Más información</Card.Link>
            </Card.Body>
          </Card>
          <Card bg="transparent" text="dark" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Comunidad</Card.Title>
              <Card.Text>
                Únete a nuestra comunidad y comparte experiencias.
              </Card.Text>
              <Card.Link href="#comunidad">Únete ahora</Card.Link>
            </Card.Body>
          </Card>
          <Card bg="transparent" text="dark" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Nuestra Frontera</Card.Title>
              <Card.Text>
                Informate hasta donde llegamos!!!
              </Card.Text>
              <Card.Link href="#comunidad">Pincha aqui</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </header>
  );
};

export default MyHeader;
