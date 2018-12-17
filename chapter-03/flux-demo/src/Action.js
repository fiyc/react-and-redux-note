/**
* @Author: fiyc
* @Date : 2018-12-17 11:05
* @FileName : Action.js
* @Description :
*     - Action模块
*/

import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const update = (counterCaption, value) => {
    AppDispatcher.dispatch({
        type: ActionTypes.COUNTER_CHANGE,
        counterCaption: counterCaption,
        value: value
    });
} 