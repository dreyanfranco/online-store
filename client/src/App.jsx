import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Footer from "./components/Footer";



function App() {
    return (
      <Routes>
        
        <Route
          path="/"
          element={
            
            <Layout>

              <Home />
              
              <Footer/>
            </Layout>
          }
        /> 
     
      </Routes> 
      
      
    );
}

export default App
