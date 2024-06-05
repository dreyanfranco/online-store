const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },

        descriptionLarga: {
            type: String,
            required: true,
        },


        category: {
            type: String,
            enum: ["FrontEnd", "BackEnd", "FullStack"],
        },

        language: {
            type: [String],
        },

        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },

        imageUrl: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
