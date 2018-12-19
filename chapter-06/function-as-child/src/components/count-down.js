/**
* @Author: fiyc
* @Date : 2018-12-19 11:00
* @FileName : count-down.js
* @Description :
*     - 倒计时组件
*/

import React, { Component } from 'react';

class CountDown extends Component{
    constructor(props){
        super(props);

        console.log(1213);
        this.state = {
            count: this.props.count
        };
    }

    componentDidMount(){
        this.intervalHandle = setInterval(() => {
            const newCount = this.state.count - 1;
            if(newCount >= 0){
                this.setState({count: newCount});
            }else{
                clearInterval(this.intervalHandle);
            }
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalHandle);
    }

    render(){
        return this.props.children(this.state.count);
    }
}


export default CountDown;