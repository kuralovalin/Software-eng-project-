import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (      
            <header class="masthead">
                <div class="container h-100">
                    <div class="row h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-10 align-self-end">
                            <h1 class="text-uppercase text-white font-weight-bold">IMPROVE YOUR MEMORY WITH THE METHODS USED BY MEMORY CHAMPIONS!</h1>
                            <hr class="divider my-4" />
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HomePage;