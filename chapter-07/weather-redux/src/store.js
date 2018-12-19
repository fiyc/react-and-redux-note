/**
* @Author: fiyc
* @Date : 2018-12-19 14:46
* @FileName : store.js
* @Description :
*     - Redux Store
      - 使用中间件 redux-thunk 拦截函数action, 在函数中重新调用dispatch发送action
*/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './weather/reducer';


const middleware = [thunkMiddleware];
const storeEnhancers = compose(
    applyMiddleware(...middleware),
    f => f
);

export default createStore(reducer, {}, storeEnhancers);