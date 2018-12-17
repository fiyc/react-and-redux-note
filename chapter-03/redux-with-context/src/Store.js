/**
* @Author: fiyc
* @Date : 2018-12-17 15:00
* @FileName : Store.js
* @Description :
*     - Redux 全局唯一Store
*/

import { createStore } from 'redux';
import reducer from './Reducer'

const initValues = {
    'First': 0,
    'Second': 10,
    "Third": 20
};

const store = createStore(reducer, initValues);
export default store;
