import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { getCourses } from '../services/courses.service';
import { Button, Row, Col } from 'react-bootstrap';
import coursesService from '../services/courses.service';
import { useNavigate } from 'react-router-dom';

function EditCourse() {
    const { course_id } = useParams(getCourses);
    const [course, setCourse] = useState(
        {
            title: '',
            description: '',
            descriptionLarga: '',
            price: 0,
            duration: 0,
            category: '',
            language: [],
        }
    );
    const navigate = useNavigate();

    useEffect(() => {
        coursesService.updatedCourse(course_id)
            // .then(res => res.json())
            .then(({ data }) => {
                console.log(data);
                setCourse(data);

            })
            .catch(err => console.error(err));
    }, [course_id]);

    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                setCourse({
                    ...course,
                    language: [...course.language, event.target.value],
                });
            } else {
                setCourse({
                    ...course,
                    language: course.language.filter((language) => language !== event.target.value),
                });
            }
        } else {
            setCourse({
                ...course,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await coursesService.updatedCourse(course_id, course);
            navigate('/profile')
        } catch (error) {
            console.error("No se ha podido actualizar el curso", error);
        }
    };

    if (!course) {
        return <div className='text-white'>Cargando...</div>;
    }

    return (
        <Form onSubmit={handleSubmit} className='text-white'>
            <Form.Group className="mb-3" controlId="formGridTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control name="title" value={course.title} onChange={handleChange} placeholder="Título" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridDescription">
                <Form.Label>Breve resumen</Form.Label>
                <Form.Control name="description" value={course.description} onChange={handleChange} placeholder="Resumen max 145 caracteres" maxLength={145} />
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
                    <Form.Control name="price" type="number" value={course.price} onChange={handleChange} placeholder="Precio" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDuration">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control name="duration" type="number" value={course.duration} onChange={handleChange} placeholder="Duración" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridCategory">
                <Form.Label>Categoría</Form.Label>
                <Form.Select name="category" value={course.category} onChange={handleChange}>
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
            <Button variant="primary" type="submit">
                Editar curso
            </Button>



        </Form>
    );
}

export default EditCourse;