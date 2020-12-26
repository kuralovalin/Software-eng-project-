// 1. tekniğin açıklamasının yapılacağı sayfa. Burdan ShowWords.js sayfasıına gidecek.

import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import ShowWords from './ShowWords';

export default class Explanation1 extends Component {
    render() {
        return <Redirect to="/showwords" component={ShowWords}/>
    }
}
