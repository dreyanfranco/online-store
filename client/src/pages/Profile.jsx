import NewCourse from '../components/Mycourses/NewCourse'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <div>Profile</div>
            <Link to="/profile/course/newcourse">
                <button >New Course</button>
            </Link>
        </>
    )
}

export default Profile
