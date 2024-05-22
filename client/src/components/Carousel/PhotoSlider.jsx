import { Carousel, Container } from "react-bootstrap";
import Foto1 from "../../components/Carousel/Images/Foto1.jpg";
import Foto2 from "../../components/Carousel/Images/Foto2.jpg";
import Foto3 from "../../components/Carousel/Images/Foto3.jpg";
import Fondo from "../../components/Carousel/Images/Fondo.jpg";
import "./Carousel.css"

function PhotoSlider() {
  return (

    <div className="rounded" style={{background: 'linear-gradient(180deg, rgba(15,56,111,1) 0%, rgba(2,27,70,1) 50%, rgba(2,27,70,1) 100%)'
    }}>

    <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
      <Carousel>
          <Carousel.Item>
          <img 
              className="d-block w-100"
              src={Foto1}
            alt="Image 1"
            />
             <Carousel.Caption>
          <h3>Variedad de cursos</h3>
          <p>Más de 30 cursos disponibles para llevar tu programación al siguiente nivel.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img            
              className="d-block w-100"
              src={Foto2}
              alt="Image 2"
             /* style={{ objectFit: "cover", width: "100%" }}*/
            />
             <Carousel.Caption>
          <h3>Ahorra en grande</h3>
          <p>Aprovecha nuestros descuentos exclusivos en ciertos días del mes.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             
              className="d-block w-100"
              src={Foto3}
              alt="Image 3"
            /*  style={{ objectFit: "cover", width: "100%" }}*/
            />
       
              <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
       
          </Carousel.Item>
          
      </Carousel>
       </div>
  
    </div>
    
  );
}

export default PhotoSlider;
