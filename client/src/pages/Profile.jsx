import NewCourse from '../components/Mycourses/NewCourse'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import { getCourses } from '../services/courses.service'
<<<<<<< HEAD
import CardUsuario from '../components/Cards/CardUsuario'
import CardCarrito from '../components/Cards/CardCarrito'
=======
import { Row, Col } from 'react-bootstrap'; // Asegúrate de importar Row y Col
>>>>>>> 3dbf3287b3f37125bba3be49eb33b142c60b1598


const Profile = () => {

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
        <>
            <div>
                <h1 className='text-white text-center'>Bienvenido {user?.username}</h1> {/* Aquí deberías mostrar el nombre del usuario */}
            </div>
            <Row className='text-white'>
                <Col>
                    <h2 className='text-center'>Cursos creados</h2>
                    {userCourses.length > 0 && userCourses.map(course => (
                        <div key={course._id}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                        </div>
                    ))}
                </Col>
                <Col>
                    <h2 className='text-center'>Todos los cursos</h2>
                    {courses.length > 0 && courses.map(course => (
                        <div key={course._id}>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <Link to={`/profile/editcourse/${course._id}`}>
                                <button className=''>Editar curso</button>
                            </Link>
                        </div>
                    ))}
                </Col>
            </Row>

            <Row className='d-flex justify-content-center'>
                <Link to="/profile/newcourse">
                    <button >New Course</button>
                </Link>
            </Row>

        </>
    )
}

export default Profile
