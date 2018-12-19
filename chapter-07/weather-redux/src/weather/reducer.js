/**
* @Author: fiyc
* @Date : 2018-12-19 15:26
* @FileName : reducer.js
* @Description :
*     - 天气组件reducer
*/

import { actionTypes } from './actions';

const reducerHandles = {};
reducerHandles[actionTypes.REQUEST_START] = (state, action) => {
    return {
        weacher: `正在请求 ${action.cityCode} 天气信息`
    };
}

reducerHandles[actionTypes.REQUEST_FAILED] = (state, action) => {
    return {
        weacher: `请求天气信息出错: ${action.error}`
    };
}

reducerHandles[actionTypes.REQUEST_SUCCESS] = (state, action) => {
    const w = action.response.weatherinfo;
    const msg = `${w.city} ${w.weather} 最低温度: ${w.temp1}, 最高温度: ${w.temp2}`;
    return {
        weacher: msg
    };
}

export default (state = {}, action) => {
    if(typeof reducerHandles[action.type] !== 'function'){
        return state;
    }

    const newState = reducerHandles[action.type](state, action);
    return newState;
}
