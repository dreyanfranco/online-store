import coursesService from "../services/courses.service"
import { Button, Col, Form, Row } from "react-bootstrap";
import React, { useState } from 'react';

const CourseForm = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        price: '',
        duration: '',
        // category: '',
        // language: [],
    });

    const handleChange = (event) => {
        // if (event.target.type === 'checkbox') {
        //     if (event.target.checked) {
        //         setCourse({
        //             ...course,
        //             language: [...course.language, event.target.value],
        //         });
        //     } else {
        //         setCourse({
        //             ...course,
        //             language: course.language.filter((language) => language !== event.target.value),
        //         });
        //     }
        // } else {
        //     setCourse({
        //         ...course,
        //         [event.target.name]: event.target.value,
        //     });
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });


        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = await coursesService.newCourse(course);
                console.log(response);
            } catch (error) {
                console.error("No se ha podido crear el curso", error);
            }
        };

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridTitle">
                    <Form.Label>Título</Form.Label>
                    <Form.Control name="title" value={course.title} onChange={handleChange} placeholder="Título" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridDescription">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control name="description" value={course.description} onChange={handleChange} placeholder="Descripción" />
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
                {/* <Form.Group className="mb-3" controlId="formGridSelect">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select name="category" value={course.category} onChange={handleChange}>
                        <option>Elige una categoría...</option>
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="BackEnd">BackEnd</option>
                        <option value="FullStack">FullStack</option>
                    </Form.Select>
                </Form.Group> */}

                {/* <Form.Group className="mb-3" controlId="formGridCheckbox" >
                    <Form.Label>Tecnologías</Form.Label>
                    <div key={`default-checkbox`}>
                        <Form.Check
                            type={'checkbox'}
                            id={`default-checkbox`}
                            label={`Default Checkbox`}
                            name="language"
                            value="JavaScript"
                            checked={course.language.includes("JavaScript")}
                            onChange={handleChange}
                        />
                        <Form.Check
                            type={'checkbox'}
                            id={`default-checkbox`}
                            label={`Default Checkbox`}
                            name="language"
                            value="Python"
                            checked={course.language.includes("Python")}
                            onChange={handleChange}
                        />
                        <Form.Check
                            type={'checkbox'}
                            id={`default-checkbox`}
                            label={`Default Checkbox`}
                            name="language"
                            value="Java"
                            checked={course.language.includes("Java")}
                            onChange={handleChange}
                        />
                    </div>
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Crear curso
                </Button>
            </Form>
        );
    }

}

export default CourseForm;
