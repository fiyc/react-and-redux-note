/**
* @Author: fiyc
* @Date : 2018-12-17 13:45
* @FileName : Summary.js
* @Description :
*     - 总数组件
*/

import React, { Component } from 'react';
import store from '../Store';

  /**
   * 傻瓜组件
   *    - 无状态
   *    - 只负责渲染页面
   */
function Summary({total}){
    return(
        <div>Total Count: {total}</div>
    );
}

class SummaryContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            sum: this.getSummary()
        };
    }

    componentDidMount = () => {
        store.subscribe(this.onUpdate);
    }

    getSummary = () => {
        const status = store.getState();
        let sum = 0;
        for(let key in status){
            sum += status[key];
        }

        return sum;
    }

    componentWillUnmount = () => {
        store.unsubscribe(this.onUpdate);
    }

    onUpdate = () => {
        this.setState({
            sum: this.getSummary()
        });
    };

    render(){
        return(
            <Summary total={this.state.sum}/>
        );
    }
}

export default SummaryContainer;