const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { isAuthenticated } = require("../middleware/jwt.middleware")

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body
        let findUser = await User.findOne({
            username: username,
            email: email,
        })

        if (findUser) {
            return res.status(400).json({ message: "Usuario ya existe" })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        })

        return res.status(201).json({ user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Algo ha ido mal. Verificar terminal" })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    if (email === "" || password === "") {
        res.status(400).json({ message: "Provide email and password." })
        return
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Credenciales incorrectas" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const { _id, username, email } = user
            const payload = { _id, username, email }

            const authToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
                algorithm: "HS256",
                expiresIn: "6h",
            })
            res.status(200).json({ authToken })
        } else {
            res.status(401).json({ message: "Sin crendenciales" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Algo ha ido mal. Verificar terminal" })
    }
})

router.get("/validate-token", isAuthenticated, (req, res) => {
    res.json(req.payload)
})

module.exports = router
