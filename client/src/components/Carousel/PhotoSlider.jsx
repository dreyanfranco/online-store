import { Carousel } from "react-bootstrap";
import Photo1 from "../../components/Carousel/Images/Photo1.png";
import Photo2 from "../../components/Carousel/Images/Photo2.png";
import Photo3 from "../../components/Carousel/Images/Photo3.png";
import Photo4 from "../../components/Carousel/Images/Photo4.png";
import Photo5 from "../../components/Carousel/Images/Photo5.png";
import collage from "../../components/Carousel/Images/collage.png";

function PhotoSlider() {
  return (
    <div className="bg-img" style={{ position: "relative" }}>
      <img
        src={collage}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.7,
          backgroundRepeat: "repeat"
        
        }}
      />
      <div
        className="container-sm d-flex justify-content-center align-items-center "
        style={{ maxWidth: "50%" , padding: "50px 0"}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="img-fluid"
              src={Photo1}
              alt="Image 1"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" img-fluid "
              src={Photo2}
              alt="Image 2"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid "
              src={Photo3}
              alt="Image 3"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid "
              src={Photo4}
              alt="Image 4"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src={Photo5}
              alt="Image 5"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default PhotoSlider;
