import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/login"
                element={
                    <Layout>
                        <Login />
                    </Layout>
                }
            />
            <Route
                path="/register"
                element={
                    <Layout>
                        <Register />
                    </Layout>
                }
            />
        </Routes>
    )
}

export default App
