import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react"
import authService from "../services/auth.service"

const AuthContext = createContext()

const AuthProviderWrapper = (props) => {
    const [user, setUser] = useState(null)
    const [loadUser, setLoadUser] = useState(false)

    const authenticateUser = () => {
        const token = localStorage.getItem("authToken")

        if (token) {
            authService
                .validateToken(token)
                .then(({ data }) => {
                    console.log({ data })
                    setUser(data)
                    setLoadUser(true)
                })
                .catch(() => logout())
        }
    }

    const logout = () => {
        localStorage.removeItem("authToken")
        setUser(null)
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{ authenticateUser, user, logout, loadUser }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

AuthProviderWrapper.propTypes = {
    children: PropTypes.node,
}

export { AuthContext, AuthProviderWrapper }
