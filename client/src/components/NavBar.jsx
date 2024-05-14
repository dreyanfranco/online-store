// import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
// import { useAuth } from "../context/auth.context"

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
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand className="ms-3" href="/">
                Cursos online
            </Navbar.Brand>
            <Container fluid className="d-flex justify-content-btween mx-5">
                <Navbar id="navbarScroll">
                    <Nav>
                        <Nav.Link href="#action1">ACERCA DE</Nav.Link>
                        <Nav.Link href="#action2">COMUNIDAD</Nav.Link>
                        <Nav.Link href="#action3">CURSOS</Nav.Link>
                        <Nav.Link href="#action4">BLOG</Nav.Link>
                        <Nav.Link href="#action5">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar>

                <Form className="d-flex">
                    <Form.Control
                        style={{ width: "600px" }}
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>

                <div>
                    <Link to="/login">
                        <Button className="me-2" variant="outline-success">
                            Entrar
                        </Button>
                    </Link>
                    <Button variant="outline-success">Registrate</Button>
                    {/* <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                        {user && <span className="ml-2">{user.username}</span>}
                    </div> */}
                </div>

                <Dropdown show={isOpen} onMouseEnter={handleMouseEnter}>
                    <Dropdown.Toggle style={{ backgroundColor: "transparent" }}>
                        {/* <button id='carrito' className='btn btn-outline-success rounded-5'><FontAwesomeIcon icon={faCartShopping} /></button> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu onMouseLeave={handleMouseLeave}>
                        <Dropdown.Item href="#/action-1">
                            JavaScript
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">MongoDB</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Phyton</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default NavBar
