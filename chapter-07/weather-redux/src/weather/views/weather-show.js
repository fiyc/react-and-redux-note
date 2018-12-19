/**
* @Author: fiyc
* @Date : 2018-12-19 15:48
* @FileName : weather-show.js
* @Description :
*     - 天气信息展示组件
*/
import React from 'react';
import { connect } from 'react-redux';

const Weather = ({msg}) => {
    return <div>{msg}</div>;
}


const mapStatus = (state) => {
    console.log('weather-show.js : 17');
    return {
        msg: state.weacher
    };
}

export default connect(mapStatus, null)(Weather);

