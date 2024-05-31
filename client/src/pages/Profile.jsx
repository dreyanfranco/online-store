import { useContext, useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { redirect } from "react-router-dom"
import CardUsuario from "../components/Cards/CardUsuario"
import { AuthContext } from "../context/auth.context"
import { getCourses } from "../services/courses.service"

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [courses, setCourses] = useState([])
    const [userCourses, setUserCourses] = useState([])
    const [otherCourses, setOtherCourses] = useState([])

    useEffect(() => {
        if (user) {
            getCourses()
                .then(({ data }) => {
                    const userCourses = data.filter(
                        (course) => course.owner === user._id
                    )
                    const otherCourses = data.filter(
                        (course) => course.owner !== user._id
                    )

                    setUserCourses(userCourses)
                    setOtherCourses(otherCourses)
                    setCourses(data)
                })
                .catch((error) =>
                    console.log("Error fetching user courses", error)
                )
        }
    }, [user])
    if (!user) {
        return redirect("/login")
    }
    return (
        <>
            <button
                onClick={() => window.scrollTo(0, 0)}
                style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
                <i className="bi bi-arrow-up-circle"></i>
            </button>

            <div>
                <h1 className="text-white text-center">
                    Bienvenid@ {user?.username}
                </h1>
            </div>
            <Row className="text-white">
                <Col xxl={12}>
                    <h2 className="text-center">Todos mis cursos</h2>
                    <CardUsuario />
                </Col>
            </Row>
        </>
    )
}

export default Profile
