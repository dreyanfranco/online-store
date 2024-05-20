import coursesService from "../services/courses.service"
import { Button, Col, Form, Row } from "react-bootstrap";

import React, { useState } from 'react';

const CourseForm = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        price: '',
        duration: '',
    });

    const handleChange = (event) => {
        setCourse({
            ...course,
            [event.target.name]: event.target.value,
        });
    };

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
            <Button variant="primary" type="submit">
                Crear curso
            </Button>
        </Form>
    );
}

export default CourseForm;
