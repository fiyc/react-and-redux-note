/**
* @Author: fiyc
* @Date : 2018-12-18 11:26
* @FileName : reducer.js
* @Description :
*     - todo reducer
*/

import * as actionTypes from './action-types';

const reducerHandler = {};
reducerHandler[actionTypes.ADD] = (state, action) => {
    return [{
        id: action.id,
        completed: action.completed,
        text: action.text
    }, ...state];
}

reducerHandler[actionTypes.TOGGLE] = (state, action) => {
    return state.map(item => {
        if(item.id !== action.id){
            return item;
        }

        return {...item, completed: !item.completed};
    });
}

reducerHandler[actionTypes.REMOVE] = (state, action) => {
    return state.filter(item => {
        return item.id !== action.id;
    });
}

export default (state = [], action) => {
    if(typeof reducerHandler[action.type] !== 'function'){
        return state;
    }

    return reducerHandler[action.type](state, action);
}