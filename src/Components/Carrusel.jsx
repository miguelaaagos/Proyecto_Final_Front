import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block mx-auto w-25" 
          src="https://m.media-amazon.com/images/I/71hChybaxtL._AC_UF894,1000_QL80_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-25"
          src="https://acdn.mitiendanube.com/stores/467/469/products/umma-8023-1111-b1c7f8682603b0753f16788257777139-1024-1024.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-25"
          src="https://sparta.cl/media/catalog/product/z/a/zapatillas-basquetbol-hombre-nike-lebron-witness-vii-celeste-lateral.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-25"
          src="https://static.runnea.com/images/202210/hoka-speedgoat-5-zapatillas-running-400x400x80xX.jpg?1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
