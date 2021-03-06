//Dictionary den rastgele 10 kelime alıp ekranda gösterecek. burdan UserInput.js sayfasına gidecek. timer olacak

import React, { Component } from 'react'
/* document.body.style = 'background: purple;'; */
import Example from '../../example';



function Call() {
    const words = Example();
    return (
        <div>
            {words}
        </div>
    );
}


export default class ShowWords extends Component {
    state = {
        minutes: 2,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state

        return (
            <div class="card">
                <div class="card-header">
                    First Practice
                </div>
                <div class="card-body">
                    { minutes === 0 && seconds === 0
                        ? <h1>Time is up !!!!</h1>
                        : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                    }
                </div>

                <div class="/">
                    <h2 >words : </h2>
                    <Call />
                </div>


            </div>

        )
    }


}
