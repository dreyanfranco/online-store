import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import { AuthProviderWrapper } from "./context/auth.context.jsx"
import "./index.css"
import CartProvider from "./context/cart.context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProviderWrapper>
            <CartProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartProvider>
        </AuthProviderWrapper>
    </React.StrictMode>
)
