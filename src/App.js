import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './styles/index.css'
import Footer from "./components/Footer"

export default function App() {
    return (
     <div className="container">
        <Navbar />
        <Main />
        <Footer />
     </div>
    )
}