/**
* @Author: fiyc
* @Date : 2018-12-18 14:11
* @FileName : add-todo.js
* @Description :
*     - todo 添加组件
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions';

class AddTodo extends Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            input: ''
        };
    }

    onSubmit = (ev) => {
        ev.preventDefault();

        const input = this.state.input;
        if(!input.trim()){
            return;
        }

        this.props.onAdd(input);
        this.setState({
            input: ''
        });
    }

    changeInput = (ev) => {
        this.setState({
            input: ev.target.value
        });
    }

    render(){
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.changeInput} value={this.state.input}/>
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        );
    }
}

const mapDispatch = (dispath, ownProps) => {
    return {
        onAdd: (value) => {
            dispath(actions.add(value));
        }
    };
}

export default connect(null, mapDispatch)(AddTodo);