import { useEffect, useState } from "react"
import { getCourses } from "../services/courses.service"
import { useParams } from "react-router-dom";
import CardsControl from "../components/Cards/CardsControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Search = () => {
    const [courses, setCourses] = useState([])
    const { course } = useParams();
    useEffect(() => {
        getCourses(course)
            .then(({ data }) => setCourses(data))
            .catch((error) => console.error(error))
    }, [])

    const filteredCourses = courses.filter(course2 => course2.title.toLowerCase().includes(course));
    return (
        <div className="d-flex flex-column p-3">
            <h2 className="mb-4 text-center">Cursos que contienen la palabra "{course}":</h2>
                <div className="d-flex flex-wrap justify-content-center gap-5">
                    {
                        filteredCourses.map(course => (
                            <CardsControl
                                key={course._id}
                                course={course}
                            />
                        ))
                    }
                </div>
        </div>
    )
}

export default Search;