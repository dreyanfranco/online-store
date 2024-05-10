import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

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
        </Routes>
    )
}

export default App
