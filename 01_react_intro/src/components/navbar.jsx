import React from "react"
import reactlogo from "../assets/react.png";

export default function Navbar() {
    return (
        <nav>
            <img src={reactlogo} />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
