/**
* @Author: fiyc
* @Date : 2018-12-20 15:02
* @FileName : redirect-auth.js
* @Description :
*     - Redirects(Auth)
*/

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const AuthExample = () => {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRouter path="/protected" component={Protected}/>
            </div>
        </Router>
    );
}

const fakeAuth={
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const Public = () => {
    return <h3>Public</h3>;
}

const Protected = () => {
    return <h3>Protected</h3>;
}

const AuthButton = withRouter(({history}) => 
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={()=> {
                    fakeAuth.signout(() => history.push("/"));
                }}>
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not Logged in.</p>
    ));

const PrivateRouter = ({component: Component, ...rest}) => {
    console.log('in PrivateRounter');
    return (
        <Route
            {...rest}
            render={props => 
                fakeAuth.isAuthenticated ? (
                    <Component {...props}/>
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: {from: props.location}
                        }}/>
                )}/>
    );
}

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {redirectToReferrer: false};
        console.log(props);
    }    

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true});
        });
    };

    render(){
        let {from} = this.props.location.state || {from: {pathname: "/"}};
        let redirectToReferrer = this.state.redirectToReferrer;

        if(redirectToReferrer){
            return <Redirect to={from}/>
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>login</button>
            </div>
        );
    }
}


export default AuthExample;