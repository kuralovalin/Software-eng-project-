import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <i className="fas fa-brain fa-2x"></i>
                    <a className="navbar-brand js-scroll-trigger" href="/" color="black">memovercity</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <Link className="navStyle" to="/login">
                                <li class="nav-item"><a className="nav-link js-scroll-trigger">Login</a></li>
                            </Link>
                            <Link className="navStyle" to="/signup">
                                <li class="nav-item"><a className="nav-link js-scroll-trigger" to="/signup">SignUp</a></li>
                            </Link>
                            <Link className="navStyle" to="/about">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger">About Us</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;