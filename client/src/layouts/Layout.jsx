import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import PhotoSlider from "../components/Carousel/PhotoSlider";
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
            <Container fluid className="flex-1 mx-auto">
                {children}
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout
