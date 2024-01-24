import React from "react";
import logo from '../assets/download.png'
import '../navbar.css'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <img src={logo} />
        <ul>

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/recipe">Recipe</Link>
            </li>
        </ul>
        </nav>

    )
}

export default Navbar