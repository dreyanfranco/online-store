import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100hv",
            }}
        >
            <NavBar />
            {/* Hero */}
            <div>{children}</div>
            <Footer className="" />
        </div>
    )
}

export default Layout
