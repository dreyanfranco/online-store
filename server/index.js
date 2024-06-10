const express = require("express")
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
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static(path.join(__dirname, "../../client/dist")))

require("./routes")(app)
require("./error-handling")(app)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"))
})

const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

module.exports = app
