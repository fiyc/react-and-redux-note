/**
* @Author: fiyc
* @Date : 2018-12-17 14:53
* @FileName : Actions.js
* @Description :
*     - Action生成模块
*/

import * as ActionTypes from './ActionTypes'

export const update = (countCaption, value) => {
    return {
        type: ActionTypes.UPDATE_COUNT,
        caption: countCaption,
        value: value
    };
}