/**
* @Author: fiyc
* @Date : 2018-12-18 14:02
* @FileName : Store.js
* @Description :
*     - 全局唯一的Store
*/

import { createStore, combineReducers} from 'redux';

import { reducer as filterReducer } from './filter';
import { reducer as todoReducer } from './todos';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);