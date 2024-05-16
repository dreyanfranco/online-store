import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Logo from "./Cards/ImagesCards/Logo.png"
import { Link } from "react-router-dom"

function NavBar() {
    // const { user } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }
    return (
        <Navbar expand="lg" className="" style={{backgroundColor:"#A6C4C1"}}>

            <Container fluid>
                <Navbar.Brand className="ms-3" href="/">
                    Cursos online
                </Navbar.Brand>

                <Navbar.Brand className='ms-3' href="#">
                    <img src={Logo} className="mx-2" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#action1"
                            className="text-wrap"
                            style={{ fontSize: "14px" }}
                        >
                            Categorias
                        </Nav.Link>
                    </Nav>

                    <Form className="d-flex flex-grow-1">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Buscar</Button>
                    </Form>

                    <Nav className="ms-3">
                        <Nav.Link
                            href="#action2"
                            className="text-wrap"
                            style={{ fontSize: "14px" }}
                        >
                            Universae Business
                        </Nav.Link>
                        <Nav.Link
                            href="#action3"
                            className="text-wrap"
                            style={{ fontSize: "14px" }}
                        >
                            Enseña en Universae
                        </Nav.Link>
                    </Nav>

                    <Dropdown show={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div>
                            <button
                                id="carrito"
                                className="btn btn-outline-info rounded-5 icon__shop">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>

                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">
                                JavaScript
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                MongoDB
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Phyton
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="mx-3">
                        <Link to="/login">
                            <Button className="me-2" variant="outline-info">
                                Entrar
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="outline-success">
                                Registrate
                            </Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
