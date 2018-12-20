/**
* @Author: fiyc
* @Date : 2018-12-20 15:56
* @FileName : custom-link.js
* @Description :
*     - Custom Link
*/

import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const CustomLinkExample = () => {
    return (
        <Router>
            <div>
                <OldSchoolMenuLink label="Home" to="/" exact={true}/>
                <OldSchoolMenuLink label="About" to="/about"/>
                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    );
}

const Home = () => {
    return <div><h2>Home</h2></div>
}

const About = () => {
    return <div><h2>About</h2></div>
}

const OldSchoolMenuLink = ({label, to, exact}) => {
    return (
        <Route 
            path={to}
            exact={exact}
            children={({match}) => (
                <div className={match ? "active": ""}>
                    {match ? ">": ""}
                    <Link to={to}>{label}</Link>
                </div>
            )}/>
    );
}

export default CustomLinkExample;