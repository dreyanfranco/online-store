module.exports = (app) => {
    const courseRoutes = require("./course.routes")
    app.use("/api", courseRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)
}
