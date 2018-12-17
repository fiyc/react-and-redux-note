/**
* @Author: fiyc
* @Date : 2018-12-17 11:21
* @FileName : SummaryStore.js
* @Description :
*     - Summary组件Store
*/

import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import CounterStore from './CounterStore.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function(){
        const counterValues = CounterStore.getCounterValues();
        let summary = 0;
        for(let key in counterValues){
            summary += counterValues[key];
        }

        return summary;
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function(cb){
        this.removeChangeListener(CHANGE_EVENT, cb);
    }
});

SummaryStore.dispatchToken = AppDispatcher.register(action => {
    if(action.type === ActionTypes.COUNTER_CHANGE){
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
});

export default SummaryStore;