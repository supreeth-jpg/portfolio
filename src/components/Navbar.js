import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar glass">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    SK<span>.</span>
                </NavLink>
                <div className="nav-links">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Projects
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
