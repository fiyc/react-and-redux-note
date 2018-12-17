/**
* @Author: fiyc
* @Date : 2018-12-17 13:49
* @FileName : ControlPanel.js
* @Description :
*     - 组合Counter与Summary的父组件
*/

import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component{
    render(){
        return (
            <div style={style}>
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>

                <hr/>
                <Summary />
            </div>
        );
    }
}

export default ControlPanel;