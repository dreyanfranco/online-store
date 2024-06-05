import { faCartShopping, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { Dropdown, NavDropdown } from "react-bootstrap"
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { CartContext } from "../context/cart.context"
import coursesService, { getCart, getCourses } from "../services/courses.service"
import Logo from "./Cards/ImagesCards/Logo.png"
import "./Navegacion.css"


function NavBar() {
    const { user, logout } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [coursesInCart, setCoursesInCart] = useState([])
    const [courses, setCourses] = useState([])
    const cart = useContext(CartContext)
    const navigate = useNavigate()

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    const handleDelCourseFromCart = async (courseId) => {
        try {
            const { data } = await coursesService.deleteCourseCart(courseId)
            cart.deleteCourseFromCart(courseId)
        } catch (error) {
            console.error("No se ha podido eliminar al carrito", error)
        }
    }

    useEffect(() => {
        setCoursesInCart(cart.cartCourses)
    }, [cart.cartCourses])

    useEffect(() => {
        getCart()
            .then(({ data }) => setCoursesInCart(data))
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        getCourses()
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    const [searchValue, setSearchValue] = useState("");
    const handleSearchCourse = async () => {
        try {
            const { data } = await coursesService.getSearchedCourse(searchValue);
        } catch (error) {
            console.error("No se ha podido encontrar el curso solicitado", error)
        }
    }

    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: "#042751" }}>
            <Container fluid className="">
                <Navbar.Brand className="ms-3" href="/">
                    <img src={Logo} className="mx-2" height="50" />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className=""
                    style={{ backgroundColor: "#45B8AC" }}
                />
                <Navbar.Collapse className="" id="responsive-navbar-nav" >
                    <NavDropdownMenu
                        title="Categorías"
                        id="collasible-nav-dropdown "
                        className="btncategorias text-white me-4 "

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

                    <Dropdown className="d-flex flex-grow-1">
                        <Form className="d-flex flex-grow-1">
                            <Form.Control
                                onSubmit={handleSearchCourse}
                                onClick={() => handleSearchMenu()}
                                type="search"
                                placeholder="Buscar"
                                className="me-3"
                                aria-label="Search"
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <Dropdown.Menu >
                                {
                                    filteredCourses.map(course => (
                                        <div key={course._id} className="d-flex justify-content-between align-items-center px-1">
                                            <Dropdown.Item key={course._id} href={`/${course._id}`} className="d-flex gap-2 px-0">
                                                <img className="col-2 rounded" src="/src/components/Cards/ImagesCards/robotcourse.jpg" alt={course.title} />
                                                <span className="col-9 text-truncate">{course.title}</span>
                                            </Dropdown.Item>
                                        </div>
                                    ))
                                }
                            </Dropdown.Menu>
                            <Button type="submit" onClick={handleSearchCourse} href={`/search/${searchValue}`} variant="outline-light" className="btnbuscar me-4">
                                Buscar
                            </Button>
                        </Form>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor: "#042751", border:"none"}}>
                            <button
                                id="carrito"
                                className="btncarrito  icon__shop position-relative"
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {coursesInCart.length}
                                </span>
                            </button>
                        </Dropdown.Toggle>


                        <Dropdown.Menu className="sm-6"
                            align={{ lg: 'end' }}
                            id="dropdown-menu-align-responsive-1"


                        >
                            {
                                coursesInCart.map(course => (
                                    <div key={course._id} className="d-flex justify-content-between align-items-center px-1">
                                        <Dropdown.Item key={course._id} href={`/${course._id}`} className="d-flex gap-2 px-0">
                                            <img className="col-2 rounded" src="/src/components/Cards/ImagesCards/robotcourse.jpg" alt={course.title} />
                                            <span className="col-9 text-truncate">{course.title}</span>
                                        </Dropdown.Item>
                                        <Button onClick={() => handleDelCourseFromCart(course._id)} className="bg-danger">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Button>
                                    </div>
                                ))
                            }
                            <Dropdown.Item className="" href="/cart" style={{ background: "#45B8AC" }}>
                                Ir al carrito
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="mx-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
                        {user ? (
                            <>
                                <Link
                                    to="/profile"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    <span className="user me-4">
                                        <i class="bi bi-person-fill me-2" style={{ color: "#45B8AC" }}></i>
                                        {user.username}
                                    </span>
                                </Link>
                                <Button
                                    className="me-2"
                                    variant="outline-danger"
                                    onClick={handleLogout}
                                >
                                    <i class="bi bi-person-fill-x me-3"></i>
                                    Cierra sesión
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button
                                        className="btnsesion me-2 "
                                        variant="outline-light"
                                    >
                                        Entrar
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button className="btnsesion" variant="outline-light">
                                        Registrarse
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
