import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import { useState } from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand className='ms-3' href="#">Cursos online</Navbar.Brand>
            <Container fluid className='d-flex justify-content-btween mx-5'>

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
                    <Button className='me-2' variant="outline-success">Entrar</Button>
                    <Button variant="outline-success">Registrate</Button>
                </div>

                <Dropdown show={isOpen} onMouseEnter={handleMouseEnter}>
                    <Dropdown.Toggle style={{ backgroundColor: "transparent" }}>
                        <button id='carrito' className='btn btn-outline-success rounded-5'><FontAwesomeIcon icon={faCartShopping} /></button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu onMouseLeave={handleMouseLeave}>
                        <Dropdown.Item href="#/action-1">JavaScript</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">MongoDB</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Phyton</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>

        </Navbar>
    );
}

export default NavBar;