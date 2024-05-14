import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"

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
                        <LoginPage />
                    </Layout>
                }
            />
        </Routes>
    )
}

export default App
