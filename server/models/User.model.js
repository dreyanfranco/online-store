const { Schema, model } = require("mongoose")
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        wishlist: [
            {
                type: Schema.Types.ObjectId,
                ref: "Course",
            },
        ],
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
