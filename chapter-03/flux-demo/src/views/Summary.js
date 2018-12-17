/**
* @Author: fiyc
* @Date : 2018-12-17 13:45
* @FileName : Summary.js
* @Description :
*     - 总数组件
*/

import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore.js';

class Summary extends Component{
    constructor(props){
        super(props);

        this.state = {
            sum: SummaryStore.getSummary()
        };
    }

    componentDidMount = () => {
        SummaryStore.addChangeListener(this.onUpdate);
    }

    componentWillUnmount = () => {
        SummaryStore.removeChangeListener(this.onUpdate);
    }

    onUpdate = () => {
        this.setState({
            sum: SummaryStore.getSummary()
        });
    };

    render(){
        return(
            <div>Total Count: {this.state.sum}</div>
        );
    }
}

export default Summary;