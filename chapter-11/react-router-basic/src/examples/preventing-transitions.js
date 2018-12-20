/**
* @Author: fiyc
* @Date : 2018-12-20 17:03
* @FileName : preventing-transitions.js
* @Description :
*     - Preventing Transitions
* 2018-12-20 17:03 - Preventing Transitions @[src/examples/preventing-transitions.js](#)
*/

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom';

const PreventingTransitionsExample = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Form</Link>
                    </li>
                    <li>
                        <Link to="/one">One</Link>
                    </li>
                    <li>
                        <Link to="/two">Two</Link>
                    </li>
                </ul>

                <Route path="/" exact component={Form}/>
                <Route path="/one" render={() => <h3>One</h3>} />
                <Route path="/two" render={() => <h3>Two</h3>} />
            </div>
        </Router>
    );
}

class Form extends Component{
    state = {isBlocking: false};

    render(){
        let {isBlocking} = this.state;

        return (
            <form>
                
            </form>
        );
    }
}

export default PreventingTransitionsExample;