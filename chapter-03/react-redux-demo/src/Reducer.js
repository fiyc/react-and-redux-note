/**
* @Author: fiyc
* @Date : 2018-12-17 14:56
* @FileName : Reducer.js
* @Description :
*     - Reducer Store接受到Action后的处理模块
*/

import * as ActionTypes from './ActionTypes';

export default (state, action) => {
    switch(action.type){
        case ActionTypes.UPDATE_COUNT: {
            const newState = Object.assign({}, state);
            newState[action.caption] += action.value;
            return newState;
        }

        default: {
            return state;
        }
    }
}