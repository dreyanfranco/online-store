import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import { AuthProviderWrapper } from "./context/auth.context.jsx"
import { WishlistProviderWrapper } from "./context/wishlist.context.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProviderWrapper>
            <WishlistProviderWrapper>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </WishlistProviderWrapper>
        </AuthProviderWrapper>
    </React.StrictMode>
)
