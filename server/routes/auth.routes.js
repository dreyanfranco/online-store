const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const verifyToken = require("../middleware/jwt.middleware")

router.post("/register", async (req, res) => {
    try {
        let user = await User.findOne({
            username: req.body.username,
            email: req.body.email,
        })

        if (user) {
            return res.status(400).json({ message: "Usuario ya existe" })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        await user.save()

        // const token = jwt.sign(
        //     { userId: user.id },
        //     process.env.JWT_SECRET_KEY,
        //     {
        //         expiresIn: "1d",
        //     }
        // )
        // res.cookie("auth_token", token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production",
        //     maxAge: 86400000,
        // })
        return res
            .status(200)
            .send({ message: "Usuario registrado correctamente" })
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Algo ha ido mal. Verificar terminal" })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Credenciales incorrectas" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Credenciales incorrectas" })
        }

        const authToken = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d",
            }
        )

        res.status(200).json({ authToken })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Algo ha ido mal. Verificar terminal" })
    }
})

router.get("/validate-token", verifyToken, (req, res) => {
    res.status(200).json(req.payload)
})

router.post("/logout", (req, res) => {
    res.cookie("auth_token", {
        expires: new Date(0),
    })
    res.send()
})

module.exports = router
