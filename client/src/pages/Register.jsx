import { Col, Row } from "react-bootstrap";
import RegisterForm from "../forms/RegisterForm";
import Image from "react-bootstrap/Image";
import robotreg2 from "../components/Section/robotreg2.png";

const Register = () => {
  return (
    <Row className="justify-content-center align-items-center p-5 mb-5">
      <Col md={4}>
        <RegisterForm />
      
          </Col>
          <Col md={4}>
              <Image src={robotreg2} fluid />
          </Col>
    </Row>
  );
};

export default Register;
