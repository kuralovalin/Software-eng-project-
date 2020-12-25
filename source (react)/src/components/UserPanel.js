import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserPanel extends Component {
    render() {
        return(
                <div class="card w-auto " style={{height: '40rem'}}>
                <div class="card-header">
                    Practices
                </div>
                <div class="card-body">
                    <h5 class="card-title">Kelime Hatırlama</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <a href="/explanation1" class="btn btn-primary">Başla !</a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">2. Teknik</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <a href="/explanation2" class="btn btn-primary">Başla !</a>
                </div>

                <div class="card-header">
                    Analyzes
                </div>
                <div class="card-body">
                    <p class="card-text">Pratik sonuçlarınıza gidin.</p>
                    <a href="/analyze" class="btn btn-primary">Analizlerim</a>
                </div>
            </div>
        );
    }
}
 export default UserPanel;
