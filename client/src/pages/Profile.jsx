import NewCourse from '../components/Mycourses/NewCourse'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import { getCourses } from '../services/courses.service'
import CardUsuario from '../components/Cards/CardUsuario'
import CardCarrito from '../components/Cards/CardCarrito'


const Profile = () => {

    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])
    useEffect(() => {
        if (user) {
            getCourses()
                .then(({ data }) => {
                    const userCourses = data.filter(course => course.owner === user._id)
                    setCourses(userCourses)
                })
                .catch(error => console.log('Error fetching user courses', error))
        }
    }, [user])

    return (
        <>
            <CardUsuario />
           
            <div>Profile</div>
            <div>{courses.length > 0 && courses.map(course => (
                <div key={course._id}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                </div>
            ))}</div>

            <Link to="/profile/course/newcourse">
                <button >New Course</button>
            </Link>
        </>
    )
}

export default Profile
