/**
* @Author: fiyc
* @Date : 2018-12-17 11:30
* @FileName : Counter.js
* @Description :
*     - 单个计数组件
*/

import React, { Component } from 'react';
import {PropTypes} from 'prop-types'

import * as Actions from '../Actions';

const buttonStyle = {
    margin: '10px'
};


/**
 * 傻瓜组件
 *    - 无状态
 *    - 只负责渲染页面
 */
function Counter({ caption, onIncrement, onDecrement, value }) {
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
}

/**
 * 容器组件
 *  - 维护状态
 *  - 不关心页面渲染, 只要渲染无状态组件
 */
class CounterContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = this.getOwnState();
    }

    getOwnState = () => {
        let res = {
            value: this.context.store.getState()[this.props.caption]
        };

        return res;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentDidMount = () => {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount = () => {
        this.context.store.unsubscribe(this.onChange);
    }

    onChange = () => {
        this.setState(this.getOwnState());
    }

    onClickIncrementButton = () => {
        this.context.store.dispatch(Actions.update(this.props.caption, 1));
    }

    onClickDecrementButton = () => {
        this.context.store.dispatch(Actions.update(this.props.caption, -1));
    }

    render() {
        return (
            <Counter
                caption={this.props.caption}
                onIncrement={this.onClickIncrementButton}
                onDecrement={this.onClickDecrementButton}
                value={this.state.value}
            />
        );
    };
}


CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer;