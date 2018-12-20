/**
* @Author: fiyc
* @Date : 2018-12-20 14:17
* @FileName : basic.js
* @Description :
*     - 路由基本使用
*/

import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const BasicExample = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </div>
        </Router>
    );
}

const Home = ()  => {
    return <div><h2>Home</h2></div>
}

const About = () => {
    return <div><h2>About</h2></div>
}

const Topics = ({match}) => {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v.State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicid`} component={Topic}/>
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}/>
        </div>
    );
}

const Topic = ({match}) => {
    return (
        <div>
            <h3>{match.params.topicid}</h3>
        </div>
    );
}

export default BasicExample;