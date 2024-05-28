import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import { getCourses } from '../services/courses.service'
import { Row, Col } from 'react-bootstrap'; // Asegúrate de importar Row y Col
import CardUsuario from '../components/Cards/CardUsuario';


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
                <Col xxl={12}>
                    <h2 className='text-center'>Cursos creados</h2>
                   <CardUsuario/>
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
