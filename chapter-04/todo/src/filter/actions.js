/**
* @Author: fiyc
* @Date : 2018-12-18 13:55
* @FileName : actions.js
* @Description :
*     - filter action
*/
import * as actionTypes from './action-types'

export const set = filter => ({
    type: actionTypes.SET,
    filter: filter
});