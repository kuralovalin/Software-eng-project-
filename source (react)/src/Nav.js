import React from 'react';
import './App';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'cadetblue'
    };

    return (
        <nav className="nav">
            <h3>Memovercity</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Homepage</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to="/signup">
                    <li>Sign Up</li>
                </Link>          
            </ul>
        </nav>
    )
}

export default Nav;