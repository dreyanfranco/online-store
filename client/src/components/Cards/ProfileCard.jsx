import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth.context'
import { getCourses } from '../../services/courses.service';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';



const ProfileCard = () => {
    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])
    const [userCourses, setUserCourses] = useState([]);

    useEffect(() => {
        if (user) {
            getCourses()
                .then(({ data }) => {
                    const userCourses = data.filter(course => course.owner === user._id)
                    setUserCourses(userCourses);
                    setCourses(data);
                })
                .catch(error => console.log('Error fetching user courses', error))
        }
    }, [user])
    return (
        <Row className='text-white'>
            <Col className='mb-20' >
                <Container className='mb-20'>
                    {userCourses.length > 0 && userCourses.map(course => (
                        <div key={course._id}>
                            <Card className='text-center'>
                                <Card.Header className='d-flex justify-content-center g-5'>
                                    <Nav variant="tabs" defaultActiveKey="#first">
                                        <Nav.Item>
                                            <Nav.Link href="#first">Info</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link to={`/profile/editcourse/${course._id}`}>
                                                <p className='text-reset'>Editar curso</p>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Link to={`/profile/deletecourse/${course._id}`}>
                                                <p className='text-reset'>Eliminar curso</p>
                                            </Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>
                                        Descripción: {course.description}
                                    </Card.Text>

                                </Card.Body>
                                <Card.Text>
                                    Categoría: {course.category}
                                </Card.Text>
                                <Card.Text>
                                    Lenguajes utilizados: {course.language}
                                </Card.Text>
                            </Card>
                        </div>
                    ))}

                </Container>
            </Col>

        </Row>
    );
}

export default ProfileCard;