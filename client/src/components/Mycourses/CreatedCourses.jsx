import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { getCourses } from '../../services/courses.service'
import ProfileNav from './ProfileNav'


const CreatedCourses = () => {
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


            <ProfileNav />


            <Row className='text-white'>
                <Col>
                    <h2 className='text-center'>Todos los cursos</h2>
                    {courses.length > 0 && courses.map(course => (
                        <div key={course._id} className='mb-20'>
                            <h3 className='d-flex justify-content-center'>Título: {course.title}</h3>
                            <p className='d-flex justify-content-center'>Descripción: {course.description}</p>
                            <div className='d-flex flex-column text-center column-gap-3 '>
                                <p>Categoría: {course.category}</p>
                                <br />
                                <p>Lenguajes utilizados: <div className='d-flex justify-content-around'>{course.language}</div></p>

                            </div>
                            <Link to={`/profile/editcourse/${course._id}`}>
                                <button className='d-flex justify-content-center'>Editar curso</button>
                            </Link>
                        </div>
                    ))}

                </Col>
            </Row>
        </>

    )
}


export default CreatedCourses