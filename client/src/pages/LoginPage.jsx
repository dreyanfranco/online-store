import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import authService from "../services/auth.service"

const LoginPage = () => {
    const { authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: undefined,
        password: undefined,
    })
    const [loginError, setLoginError] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await authService.login(formData)
            localStorage.setItem("authToken", data.authToken)
            authenticateUser()
            console.log("Loggeado correctamente")
            navigate("/")
        } catch (error) {
            setLoginError("Credenciales incorrectas")
            console.error("No se ha podido loggear", error)
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
            >
                <Form.Label column sm="2">
                    Email
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingresa email"
                    />
                </Col>
            </Form.Group>
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
            >
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingresa contraseña"
                    />
                </Col>
            </Form.Group>
            {loginError && <div className="text-danger">{loginError}</div>}
            <Button type="submit">Login</Button>
        </Form>
    )
}

export default LoginPage
