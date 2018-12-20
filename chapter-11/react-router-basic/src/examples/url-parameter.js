/**
* @Author: fiyc
* @Date : 2018-12-20 14:45
* @FileName : url-parameter.js
* @Description :
*     - URL Parammeters
*/
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const ParamExample = () => {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to="/netfix">Netfix</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                </ul>

                <Route path="/:id" component={Child}/>
            </div>
        </Router>
    );
}

const Child = ({match}) => {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    );
}

const ComponentWithRegex = ({match}) => {
    return (
        <div>
            <h3>Only asc/desc are allowed: {match.params.direction}</h3>
        </div>
    );
}


export default ParamExample;