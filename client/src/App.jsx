import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import CourseForm from "./forms/CourseForm"
import EditCourse from "./forms/EditCourse"
import Cart from "./pages/Cart"
import DeleteCourse from "./forms/DeleteCourse"
import CreatedCourses from "./components/Mycourses/CreatedCourses"

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
            <Route
                path="/profile"
                element={
                    <Layout>
                        <Profile />
                    </Layout>
                }
            />
            <Route
                path="/profile/newcourse"
                element={
                    <Layout>
                        <CourseForm />
                    </Layout>
                }
            />
            <Route
                path="/profile/editcourse/:course_id"
                element={
                    <Layout>
                        <EditCourse />
                    </Layout>
                }
            />
            <Route
                path="/profile/deletecourse/:course_id"
                element={
                    <Layout>
                        <DeleteCourse />
                    </Layout>
                }
            />
            <Route
                path="/profile/createdCourses"
                element={
                    <Layout>
                        <CreatedCourses />
                    </Layout>
                }
            />
            <Route
                path="/cart"
                element={
                    <Layout>
                        <Cart />
                    </Layout>
                }
            />
        </Routes>
    )
}

export default App
