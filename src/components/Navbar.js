import React from "react"
import react_icon from "../assets/react-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img src={react_icon} className="nav-image" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
