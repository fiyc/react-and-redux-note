/**
* @Author: fiyc
* @Date : 2018-12-18 13:57
* @FileName : reducer.js
* @Description :
*     - filter reducer模块
*/

import * as actionTypes from './action-types'
import {FilterTypes} from '../constants'

const reducerHandle = {};
reducerHandle[actionTypes.SET] = (state, action) => {
    return action.filter;
}

export default (state = FilterTypes.All, action) => {
    if(typeof reducerHandle[action.type] !== 'function'){
        return state;
    }

    return action.filter;
}