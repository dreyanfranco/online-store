import { Col, Row } from "react-bootstrap"
import LoginForm from "../forms/LoginForm"

const Login = () => {
    return (
        <Row className="justify-content-center align-items-center">
            <Col md={4}>
                <LoginForm />
            </Col>
        </Row>
    )
}

export default Login
