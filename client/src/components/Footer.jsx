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
      <Row className="mt-1">
        <Col md={2} lg={4} className="px-5">
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

/*<MDBFooter className='text-light mt-5 ' style={{ backgroundColor: "#042751" }}>
         
            
        <section className=''>
          <MDBContainer className='text-center text-md-start '>
            <MDBRow className='mt-1'>
               <MDBCol sm="1" md="2" lg="4" xl="4" className='mx-auto mb-2'>
               <Link to="/" className="">
              <img src={Logo} className="mb-4" height="45"/>
                            </Link>
                <h6 className='text-uppercase fw-bold mb-3'>
                    Empresa
                </h6>
                <p>
                  Información de la empresa
                </p>
              </MDBCol>
  
              
  
              <MDBCol md="3" lg="4" xl="4" className=' mb-2'>
                <h6 className='text-uppercase fw-bold mb-2'>About</h6>
                <p className="mb-2">
                  <a href='#!' className='text-reset'>
                    ¿Quienes somos?
                  </a>
                </p>
                <p className="mb-2">
                  <a href='#!' className='text-reset'>
                    Blog
                  </a>
                </p>
                <p className="mb-2">
                  <a href='#!' className='text-reset'>
                    Condiciones
                  </a>
                </p>
                <p className="mb-3">
                  <a href='#!' className='text-reset'>
                    Política de privacidad
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="4" className='mx-auto mb-md-0 mb-2'>
                <h6 className='text-uppercase fw-bold mb-2'>Contacto</h6>
                <p className="mb-2">
                  <MDBIcon icon="home" className="me-2" />
                  Direccion
                </p>
                <p className="mb-2">
                  <MDBIcon icon="envelope" className="me-2" />
                  correo@correo.com
                </p>
                <p className="mb-2">
                  <MDBIcon icon="phone" className="me-2" /> + 01 234 567 88
                </p>
                <p className="mb-2">
                  <MDBIcon icon="print" className="me-2" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            Empresa.com
          </a>
        </div>
        <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom '>
        <div className='me-5 d-none d-lg-block'>
          <span>Nuestras redes:</span>
        </div>
        <div className="">
            <a href='' className="me-4 text-reset bi bi-facebook"></a>
            <a href='' className='me-4 text-reset bi bi-twitter'></a>
            <a href='' className='me-4 text-reset bi bi-instagram'></a>
            <a href='' className='me-4 text-reset bi bi-linkedin'></a>
            <a href='' className='me-4 text-reset bi bi-google'> </a>
            <a href='' className='me-4 text-reset text-reset'> </a>
          
        </div>
            </section>
</MDBFooter>*/

/*
          <footer className="text-white py-4 bg-dark mt-5" style={{ zIndex: 3 }}>
          
            <div className="container">
                <nav className="row">
              <Link to="/" className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center">
                        <img src={Logo} className="" height="50"/>
                    </Link>
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2"> Empresa </li>
                        <li className="text-center"> Informacion sobre este sitio web</li>
                    </ul>

                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2"> Enlaces </li>
                        <li>
                            <Link to="/" className="text-reset">Enlace1</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-reset">Enlace2</Link>
                        </li>
                    </ul>

                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2"> Redes Sociales </li>
                        <li className="d-flex justify-content-between">
                            <i className="bi bi-facebook" />
                            <i className="bi bi-instagram" />
                            <i className="bi bi-twitter" />
                            <i className="bi bi-linkedin"/>
                        </li>
                    </ul>
                    <div className="container">
                       <p className="text-center mb-0 mt-2">2024, Empresa.</p> 
                    </div>
                </nav>
            </div>

            
         
        </footer>
        */
