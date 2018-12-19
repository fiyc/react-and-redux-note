/**
* @Author: fiyc
* @Date : 2018-12-19 15:36
* @FileName : choose-city.js
* @Description :
*     - 选择城市组件
*/


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../actions'

const citycodes = {
    '北京': '101010100',
    '上海': '101020100',
    '广州': '101280101',
    '深圳': '101280601',
};


const CityChoose = ({onChange}) => {
    return (
        <select onChange={onChange}>
        {
            Object.keys(citycodes).map(key => (
                <option key={key} value={citycodes[key]}>
                    {key}
                </option>
            ))
        }
        </select>
    );
}

const mapDispatch = dispatch => {
    console.log('choose-city.js : 37');
    return {
        onChange: e => {
            const code = e.target.value;
            dispatch(actions.fetchWeather(code));
        }
    };
}

export default connect(null, mapDispatch)(CityChoose);