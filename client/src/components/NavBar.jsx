import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useState } from "react"
import { Dropdown, NavDropdown } from "react-bootstrap"
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import Logo from "./Cards/ImagesCards/Logo.png"
import "./Navegacion.css"

function NavBar() {
    const { user, logout } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }
    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: "#042751" }}>
            <Container fluid>
                <Navbar.Brand className="ms-3" href="/">
                    <img src={Logo} className="mx-2" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
                <Navbar.Collapse className="" id="responsive-navbar-nav">
                    <NavDropdownMenu
                        title="Categorías"
                        id="collasible-nav-dropdown "
                        className="text-white me-4"
                    >
                        <DropdownSubmenu
                            href="#"
                            title="Desarrolo Web"
                            className="dropdown-submenu "
                        >
                            <NavDropdown.Item href="#" className="">
                                {" "}
                                JavaScript{" "}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                React JS
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                {" "}
                                Angular
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#"> CSS </NavDropdown.Item>
                        </DropdownSubmenu>
                        <DropdownSubmenu
                            href="#action/3.7"
                            title="Lenguajes de programación"
                            className="dropdown-submenu"
                        >
                            <NavDropdown.Item href="#action/3.2">
                                {" "}
                                Python{" "}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Java
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                {" "}
                                C#{" "}
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                {" "}
                                C++{" "}
                            </NavDropdown.Item>
                        </DropdownSubmenu>
                    </NavDropdownMenu>

                    <Form className="d-flex flex-grow-1">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-3"
                            aria-label="Search"
                        />
                        <Button variant="outline-light" className="me-4">
                            Buscar
                        </Button>
                    </Form>

                    <Dropdown show={isOpen} onMouseEnter={handleMouseEnter}>
                        <div>
                            <button
                                id="carrito"
                                className="btn btn-outline-light rounded-5 icon__shop me-4"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>

                        <Dropdown.Menu onMouseLeave={handleMouseLeave}>
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
                        {user ? (
                            <>
                                <Link
                                    to="/profile"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    <span className="me-5">
                                        {user.username}
                                    </span>
                                </Link>
                                <Button
                                    className="me-2"
                                    variant="outline-danger"
                                    onClick={logout}
                                >
                                    Cierra sesión
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button
                                        className="me-2"
                                        variant="outline-light"
                                    >
                                        Entrar
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="outline-light">
                                        Registrate
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

{
    /* <Nav className="ms-3">
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
                    </Nav>*/
}
