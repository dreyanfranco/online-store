import { Container } from "react-bootstrap"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100hv",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <NavBar />
            {/* Hero */}
            <Container> </Container>
            <Container fluid className="mx-auto">
                {children}
            </Container>
            <Footer className="" />
        </div>
    )
}

export default Layout
