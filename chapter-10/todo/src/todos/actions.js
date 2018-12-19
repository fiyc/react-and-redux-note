/**
* @Author: fiyc
* @Date : 2018-12-18 11:20
* @FileName : actions.js
* @Description :
*     - todo action模块
*/

import * as actionTypes from './action-types';

let nextId = 0;

export const add = text => ({
    type: actionTypes.ADD,
    completed: false,
    id: nextId++,
    text: text
});

export const troggle = id => ({
    type: actionTypes.TOGGLE,
    id: id
});

export const remove = id => ({
    type: actionTypes.REMOVE,
    id: id
});