const express = require("express")

const logger = require("morgan")

const cookieParser = require("cookie-parser")

const cors = require("cors")

// const FRONTEND_URL = "http://127.0.0.1:5173/";

module.exports = (app) => {
    app.set("trust proxy", 1)

    // To have access to `body` property in the request
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())

    app.use(cors())

    app.use(logger("dev"))
}
