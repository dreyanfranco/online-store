import { Form, Link } from "react-router-dom";
import Logo from "./Cards/ImagesCards/Logo.png";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container className="text-center text-md-start text-white">
      <Row className="mt-1 d-flex justify-content-center">
        <Col md={6} lg={4} className="px-5">
          <h1 className="fw-bold text-white mb-3">EMPRESA</h1>

          <p className="text-white">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            quis metus bibendum, vehicula purus sit amet, imperdiet eros. Nulla
            quis semper velit, non viverra nisl.
          </p>

          <div className="">
            <a href="" className="me-4 text-reset bi bi-facebook"></a>
            <a href="" className="me-4 text-reset bi bi-twitter"></a>
            <a href="" className="me-4 text-reset bi bi-instagram"></a>
            <a href="" className="me-4 text-reset bi bi-linkedin"></a>
            <a href="" className="me-4 text-reset bi bi-google"></a>
            <a href="" className="me-4 text-reset text-reset"></a>
          </div>
        </Col>

        <Col md={6} lg={4} className="d-none d-md-block p-5">
          <h6 className="text-uppercase fw-bold mb-2">About</h6>
          <p className="mb-2">
            <a href="#!" className="text-reset">
              {" "}
              ¿Quienes somos?
            </a>
          </p>

          <p className="mb-2">
            <a href="#!" className="text-reset">
              Blog
            </a>
          </p>

          <p className="mb-2">
            <a href="#!" className="text-reset">
              Condiciones
            </a>
          </p>

          <p className="mb-3">
            <a href="#!" className="text-reset">
              Política de privacidad
            </a>
          </p>
        </Col>
        <Col md={6} lg={4} className="p-3 mt-4">
          <h6 className="text-uppercase fw-bold mb-2">Contacto</h6>
          <p className="mb-2">Direccion</p>
          <p className="mb-2">correo@correo.com</p>
          <p className="mb-2">+ 01 234 567 88</p>
          <p className="mb-2">+ 01 234 567 89</p>
        </Col>

        <div className="text-center p-1">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Empresa.com
          </a>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;