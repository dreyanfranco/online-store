import { useEffect, useState } from "react"
import Cards from "../components/Cards/Cards"
import { getCourses, getSearchedCourse } from "../services/courses.service"
import { useParams } from "react-router-dom";

const Search = () => {
    const [courses, setCourses] = useState([])
    const { course } = useParams();
    useEffect(() => {
        getCourses(course)
        .then(({ data }) => setCourses(data))
        .catch((error) => console.error(error))
    }, [])
    console.log(course);
    const filteredCourses = courses.filter(course2 => course2.title.toLowerCase().includes(course));
    return (
        <div>
            {
                filteredCourses.map(course => (
                    <div key={course._id} className="d-flex justify-content-between align-items-center px-1">
                        <img className="col-2 rounded" src="/src/components/Cards/ImagesCards/robotcourse.jpg" alt={course.title} />
                        <span className="col-9 text-truncate">{course.title}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Search;