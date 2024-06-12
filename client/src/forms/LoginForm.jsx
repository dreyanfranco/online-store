import { useContext, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import authService from "../services/auth.service"


const LoginForm = () => {
    const { authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
            // console.log("Loggeado correctamente")
            navigate("/")
            window.location.reload();
        } catch (error) {
            setLoginError("Credenciales incorrectas")
            console.error("No se ha podido loggear", error)
        }
    }
    return (

               <Form onSubmit={handleSubmit}>
            <h2 className="text-center font-monospace" style={{ color: "#45B8AC" }}>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingresa email"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingresa contraseña"
                />
            </Form.Group>
            {loginError && <div className="text-danger my-2">{loginError}</div>}
            <div className="text-center mt-4">
                <Button className="w-100" type="submit" style={{background:"#45B8AC", color:"#0A2648"}}>
                    Login
                </Button>
            </div>
            <div className="text-center mt-3 text-white">
                <p>
                    ¿No tienes cuenta?{" "}
                    <Link to="/register" style={{ color: "grey" }}>
                        {" "}
                        Regístrate
                    </Link>
                </p>
            </div>
            </Form>
           
    )
}

export default LoginForm
