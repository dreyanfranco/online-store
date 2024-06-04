import { useState } from "react"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { Link, useNavigate } from "react-router-dom"
import authService from "../services/auth.service"


const RegisterForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
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
            await authService.register(formData)
            navigate("/")
        } catch (error) {
            setLoginError("No se ha podido registrar")
            console.error("No se ha podido registrar", error)
        }
    }
    return (
        
        <Form onSubmit={handleSubmit}>
            <h2 className="text-center font-monospace" style={{ color: "#45B8AC" }}>Registro</h2>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="text-white"> Username</Form.Label>
                <Form.Control 
                    name="username"
                    type="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Ingresa username"
                
                />
            </Form.Group>
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
                    Registro
                </Button>
            </div>
            <div className="text-center mt-3 text-white">
                <p>
                    Ya tienes cuenta?{" "}
                    <Link to="/login" style={{ color: "grey" }}>
                        {" "}
                        Accede
                    </Link>
                </p>
            </div>
        </Form>
    )
}

export default RegisterForm
