import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { getCourses } from '../services/courses.service'
import CardUsuario from '../components/Cards/CardUsuario';
import { Row, Col, Container } from 'react-bootstrap'; // Asegúrate de importar Row y Col
import ProfileCard from '../components/Cards/ProfileCard'
import { AuthContext } from '../context/auth.context'
import ProfileNav from '../components/Mycourses/ProfileNav';




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
            <button onClick={() => window.scrollTo(0, 0)} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                Volver arriba
            </button>

            <div>
                <h1 className='text-white text-center'>Bienvenido {user?.username}</h1>
            </div>
            <Row className='text-white'>
                <Col xxl={12}>
                    <h2 className='text-center'>Cursos creados</h2>
                    <ProfileNav />
                    {userCourses.length > 0 && userCourses.map(course => (
                        <div key={course._id}>
                            <CardUsuario course={course} />
                        </div>
                    ))}
                    <CardUsuario />




                </Col>
            </Row>





        </>

    )
}

export default Profile
