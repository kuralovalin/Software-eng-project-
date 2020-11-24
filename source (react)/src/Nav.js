import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="/" color="black">Memovercity</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto my-2 my-lg-0">
                            <Link to="/">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger">Homepage</a></li>
                            </Link>
                            <Link to="/login">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger">Login</a></li>
                            </Link>
                            <Link className="navStyle" to="/signup">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger" to="/signup">SignUp</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        


        /*
        <nav className="nav">
            <img src={logo}  width="60" height="60" alt="" />
            <h3 className="app-name">memovercity</h3>  
            <ul className="nav-links">
                <Link className="navStyle" to="/">
                    <li>Homepage</li>
                </Link>
                <Link className="navStyle" to="/login">
                    <li>Login</li>
                </Link>
                <Link className="navStyle" to="/signup">
                    <li>Sign Up</li>
                </Link>          
            </ul>
        </nav> */
    )
}

export default Nav;