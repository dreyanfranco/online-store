const express = require("express")
const router = express.Router()
const Course = require("../models/Course.model")
const mongoose = require("mongoose")
const { isAuthenticated } = require("../middleware/jwt.middleware")

//Status 200: OK
//Status 201: Created
//Status 400: Bad Request
//Status 404: Not Found
//Status 500: Internal Server Error

// Obtener todos los cursos
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find()
        return res.status(200).json(courses)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Obtener un curso por ID
router.get("/:course_id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.course_id)
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }
        return res.status(200).json(course)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// Crear un nuevo curso
router.post("/", isAuthenticated, async (req, res) => {
    const course = {
        ...req.body,
        owner: req.payload._id,
    }
    try {
        const newCourse = await Course.create(course)
        return res.status(201).json(newCourse)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Eliminar un curso
router.delete("/:course_id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        await course.remove()
        res.json({ message: "Course deleted" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// Actualizar un curso

router.patch("/:course_id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.course_id)
        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.course_id,
            req.body,
            { new: true }
        )
        res.json(updatedCourse)
        return res.status(200).json(updatedCourse)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

module.exports = router
