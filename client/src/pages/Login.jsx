import { Col, Row } from "react-bootstrap"
import LoginForm from "../forms/LoginForm"
import Image from 'react-bootstrap/Image'
import robotlog1 from "../components/Section/robotlog1.png";


const Login = () => {
    return (
        <Row className="justify-content-center align-items-center p-5" >
            <Col className="" md={4}>
                <LoginForm />
               
            </Col> 
            <Col md={4}>
                <Image src={robotlog1} fluid  />
            </Col>
        </Row>
    )
}

export default Login

