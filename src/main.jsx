import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
