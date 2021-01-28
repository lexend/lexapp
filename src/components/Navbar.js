import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar bg-dark container">
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/login">Login</Link></h4>
            <h4><Link to="/about">About</Link></h4>
        </nav>
)
}

export default Navbar
