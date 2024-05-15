import { Link } from "react-router-dom"
import Logo from "./Cards/ImagesCards/Logo.png"

const Footer = () => {
    return (
        
        <footer className="text-white py-4 bg-dark mt-5"  style={{ zIndex: 3 }}>
            
            
            <div className="container">
                <nav className="row">
                    <Link to="/" className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center">
                        <img src={Logo} className="mx-2" height="50"/>
                    </Link>
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2"> Empresa </li>
                        <li className="text-center"> Informacion sobre este sitio web</li>
                    </ul>

                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2"> Enlaces </li>
                        <li>
                            <Link to="/" className="text-reset">Enlace1</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-reset">Enlace2</Link>
                        </li>
                    </ul>

                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold mb-2"> Redes Sociales </li>
                        <li className="d-flex justify-content-between">
                            <i className="bi bi-facebook" />
                            <i className="bi bi-instagram" />
                            <i className="bi bi-twitter" />
                            <i className="bi bi-linkedin"/>
                        </li>
                    </ul>
                    <div className="container">
                       <p className="text-center mb-0 mt-2">2024, Empresa.</p> 
                    </div>
                </nav>
            </div>

            
         
        </footer>
)
}

export default Footer
