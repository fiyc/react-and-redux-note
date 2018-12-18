/**
* @Author: fiyc
* @Date : 2018-12-18 15:44
* @FileName : filter.js
* @Description :
*     - fiter 组件
* 2018-12-18 15:44 - fiter 组件 @[src/filter/views/filter.js](#)
*/

import React from 'react';
import Link from './link'
import {FilterTypes} from '../../constants'

import './style.css';

const Filter = () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.All}>{FilterTypes.All}</Link>
            <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
            <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
        </p>
    );
}

export default Filter;