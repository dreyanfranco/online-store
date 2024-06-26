import { Button, Col, Form, Row } from "react-bootstrap"
import coursesService from "../services/courses.service"

import { useState } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const CourseForm = () => {
    const [course, setCourse] = useState({
        title: "",
        description: "",
        descriptionLarga: "",
        price: "",
        duration: "",
        language: [],
        category: "",
        imageUrl: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "price" && value.length > 3) {
            return; // Limita a 3 dígitos
        }
        
        if (name === "duration" && value.length > 3) {
            return; // Limita a 3 dígitos
        }

        setCourse({
            ...course,
            [name]: value
        });

        if (event.target.type === "checkbox") {
            if (event.target.checked) {
                setCourse({
                    ...course,
                    language: [...course.language, event.target.value],
                })
            } else {
                setCourse({
                    ...course,
                    language: course.language.filter(
                        (language) => language !== event.target.value
                    ),
                })
            }
        } else if (event.target.type === "file") {
            setSelectedFile(event.target.files[0])
        } else {
            setCourse({
                ...course,
                [event.target.name]: event.target.value,
            })
        }
    }

    const createCourseButton = () => {
        Swal.fire({
            title: "¿Estás seguro de que quieres crear este curso?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "!Si, crear!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Curso creado con exito",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/profile/createdCourses");
                    }
                })
            };
        })
    };


    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const formData = new FormData()
            formData.append("title", course.title)
            formData.append("description", course.description)
            formData.append("descriptionLarga", course.descriptionLarga)
            formData.append("price", course.price)
            formData.append("duration", course.duration)
            formData.append("category", course.category)
            course.language.forEach((lang) => formData.append("language", lang))
            if (selectedFile) {
                formData.append("image", selectedFile)
            }

            const response = await coursesService.newCourse(formData)
            console.log(response)
        } catch (error) {
            console.error("No se ha podido crear el curso", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="text-white px-5">
            <Form.Group className="mb-3" controlId="formGridTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                    name="title"
                    value={course.title}
                    onChange={handleChange}
                    placeholder="Título"
                    maxLength={60}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridDescription">
                <Form.Label>Breve resumen</Form.Label>
                <Form.Control
                    name="description"
                    value={course.description}
                    onChange={handleChange}
                    placeholder="Resumen del curso max 145 caracteres"
                    maxLength={145}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    name="descriptionLarga"
                    value={course.descriptionLarga}
                    onChange={handleChange}
                    placeholder="Descripción Extendida"
                    maxLength={400}
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPrice">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        name="price"
                        type="number"
                        value={course.price}
                        onChange={handleChange}
                        placeholder="Precio"
                        max={999}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDuration">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control
                        name="duration"
                        type="number"
                        value={course.duration}
                        onChange={handleChange}
                        placeholder="Duración"
                        maxLength={3}
                    />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridCategory">
                <Form.Label>Categoría</Form.Label>
                <Form.Select
                    name="category"
                    value={course.category}
                    onChange={handleChange}
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="FrontEnd">FrontEnd</option>
                    <option value="BackEnd">BackEnd</option>
                    <option value="FullStack">FullStack</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridLanguage">
                <Form.Check
                    type="checkbox"
                    label="JavaScript"
                    name="language"
                    value="JavaScript"
                    checked={course.language.includes("JavaScript")}
                    onChange={handleChange}
                />

                <Form.Check
                    type="checkbox"
                    label="Python"
                    name="language"
                    value="Python"
                    checked={course.language.includes("Python")}
                    onChange={handleChange}
                />
                <Form.Check
                    type="checkbox"
                    label="Java"
                    name="language"
                    value="Java"
                    checked={course.language.includes("Java")}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={createCourseButton} style={{background:"#45B8AC", color:"#0A2648"}} disabled={isLoading}>
                {isLoading ? "Un momento, por favor..." : "Crear curso"}
            </Button>
        </Form>
    )
}

export default CourseForm
