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


  /**
   * 傻瓜组件
   *    - 无状态
   *    - 只负责渲染页面
   */
function Counter({caption, onIncrement, onDecrement, value}){
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
        return (
            <Counter
                caption={this.props.caption}
                onIncrement={this.onClickIncrementButton}
                onDecrement={this.onClickDecrementButton}
                value={this.state.count}
            />
        );
    };
}

export default CounterContainer;