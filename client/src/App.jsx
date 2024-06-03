import { Route, Routes } from "react-router-dom"
import "./App.css"
import CreatedCourses from "./components/Mycourses/CreatedCourses"
import ProfileNav from "./components/Mycourses/ProfileNav"
import CourseForm from "./forms/CourseForm"
import DeleteCourse from "./forms/DeleteCourse"
import EditCourse from "./forms/EditCourse"
import Layout from "./layouts/Layout"
import Cart from "./pages/Cart"
import Course from "./pages/Course"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Wishlist from "./pages/Wishlist"
import Search from "./pages/Search"

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
                path="/profile/*"
                element={
                    <Layout>
                        <ProfileNav />
                        <Routes>
                            <Route index element={<Profile />} />
                            <Route path="newcourse" element={<CourseForm />} />
                            <Route
                                path="editcourse/:course_id"
                                element={<EditCourse />}
                            />
                            <Route
                                path="deletecourse/:course_id"
                                element={<DeleteCourse />}
                            />
                            <Route
                                path="createdCourses"
                                element={<CreatedCourses />}
                            />
                            <Route path="wishlist" element={<Wishlist />} />
                        </Routes>
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

            <Route
                path="/:course_id"
                element={
                    <Layout>
                        <Course />
                    </Layout>
                }
            />

            <Route
                path="/search/:course"
                element={
                    <Layout>
                        <Search />
                    </Layout>
                }
            />
        </Routes>
    )
}

export default App
