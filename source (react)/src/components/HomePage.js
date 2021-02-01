import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class HomePage extends Component {
    render() {
        return (
            <div >
                <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-black font-weight-bold">IMPROVE YOUR MEMORY WITH THE METHODS USED BY MEMORY CHAMPIONS!</h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">Start now!</p>
                            <Link style={{marginRight:15}} className="btn btn-primary btn-xl js-scroll-trigger" to="/login">Login</Link>
                            <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/signup">Register</Link>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}

export default HomePage;