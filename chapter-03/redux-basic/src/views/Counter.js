/**
* @Author: fiyc
* @Date : 2018-12-17 11:30
* @FileName : Counter.js
* @Description :
*     - 单个计数组件
*/

import React, { Component } from 'react';

import * as Actions from '../Actions';
import store from '../Store';

const buttonStyle = {
    margin: '10px'
  };

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: store.getState()[this.props.caption]
        };
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount = () => {
        store.subscribe(this.onChange);
    }

    componentWillUnmount = () => {
        store.unsubscribe(this.onChange);
    }

    onChange = () => {
        const newCount = store.getState()[this.props.caption];
        this.setState({ count: newCount });
    }

    onClickIncrementButton = () => {
        store.dispatch(Actions.update(this.props.caption, 1));
    }

    onClickDecrementButton = () => {
        store.dispatch(Actions.update(this.props.caption, -1));
    }

    render() {
        const { caption } = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    };

}

export default Counter;