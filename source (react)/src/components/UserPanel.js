import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './user_panel.css';

export class UserPanel extends Component {
    render() {
        return(
            <div className="panel">
                <div className="panel-wrapper">
                    <div className= "x">
                        Go to practices page
                    </div>
                    <Link to="/practices">
                        <Button variant="contained" size="large">
                            go!
                        </Button>
                    </Link>
                    <div className= "x">
                        Go to analyze page
                    </div>
                   <Link to="/analyze">
                        <Button variant="contained" size="large">
                            go!
                        </Button>
                    </Link>     
                </div>
            </div>
        );
    }
}
 export default UserPanel;
