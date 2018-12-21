/**
* @Author: fiyc
* @Date : 2018-12-21 13:46
* @FileName : Recursive-Paths.js
* @Description :
*     - Recursive Paths
*/

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const PEEPS = [
    {id: 0, name: "Michelle", friends: [1,2,3]},
    {id: 1, name: "Sean", friends: [0,3]},
    {id: 2, name: "Kim", friends: [0,1,3]},
    {id: 3, name: "David", friends: [1,2]},
];

const find = (id) => {
    return PEEPS.find(p => p.id == id);
}

const RecursiveExample = () => {
    return (
        <Router>
            <Person match={{params:{id:0}, url: ""}}/>
        </Router>
    );
}

const Person = ({match}) => {
    console.log(`current match.url: ${match.url}`);
    console.log(`current params: ${typeof match.params.id}`);
    let person = find(match.params.id);
    return (
        <div>
            <h3>{person.name}'s Friends</h3>
            <ul>
                {
                    person.friends.map(id => (
                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
                        </li>
                    ))
                }
            </ul>

            <Route path={`${match.url}/:id`} component = {Person}/>
        </div>
    );
}

export default RecursiveExample;