const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config()

require("./db/mongodb")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
)

require("./routes")(app)
require("./error-handling")(app)

const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

module.exports = app
