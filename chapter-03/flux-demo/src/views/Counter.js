/**
* @Author: fiyc
* @Date : 2018-12-17 11:30
* @FileName : Counter.js
* @Description :
*     - 单个计数组件
*/

import React, { Component } from 'react';

import * as Actions from '../Action';
import CounterStore from '../stores/CounterStore';

const buttonStyle = {
    margin: '10px'
  };

class Counter extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[this.props.caption]
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({ count: newCount });
    }

    onClickIncrementButton() {
        Actions.update(this.props.caption, 1);
    }

    onClickDecrementButton() {
        Actions.update(this.props.caption, -1);
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