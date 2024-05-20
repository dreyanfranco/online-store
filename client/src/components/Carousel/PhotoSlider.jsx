import { Carousel, Container } from "react-bootstrap";
import Photo1 from "../../components/Carousel/Images/Photo1.png";
import Photo2 from "../../components/Carousel/Images/Photo2.png";
import Photo3 from "../../components/Carousel/Images/Photo3.png";
import Photo4 from "../../components/Carousel/Images/Photo4.png";
import Photo5 from "../../components/Carousel/Images/Photo5.png";
import Fondo from "../../components/Carousel/Images/Fondo.jpg";
import "./Carousel.css"

function PhotoSlider() {
  return (

    <div className="p-3" style={{backgroundColor:"#b6e1f9"}}>

    <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
      <Carousel>
          <Carousel.Item>
          <img 
              className="d-block w-100"
              src={Photo1}
            alt="Image 1"
         
             />
          </Carousel.Item>
          <Carousel.Item>
         
            <img
            
              className="d-block w-100"
              src={Photo2}
              alt="Image 2"
             /* style={{ objectFit: "cover", width: "100%" }}*/
            />
             <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          
          </Carousel.Item>
          <Carousel.Item>
            <img
             
              className="d-block w-100"
              src={Photo3}
              alt="Image 3"
            /*  style={{ objectFit: "cover", width: "100%" }}*/
            />
              <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            
              className="d-block w-100"
              src={Photo4}
              alt="Image 4"
            /*  style={{ objectFit: "cover", width: "100%" }}*/
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
          
              className="d-block w-100"
              src={Photo5}
              alt="Image 5"
            /*  style={{ objectFit: "cover", width: "100%" }}*/
            />
          </Carousel.Item>
      </Carousel>
       </div>
  
    </div>
    
  );
}

export default PhotoSlider;
