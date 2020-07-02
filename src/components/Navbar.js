import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/lists">Lists</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;