import { Col, Row } from "react-bootstrap"
import RegisterForm from "../forms/RegisterForm"

const Register = () => {
    return (
        <Row className="justify-content-center align-items-center">
            <Col md={4}>
                <RegisterForm />
            </Col>
        </Row>
    )
}

export default Register
