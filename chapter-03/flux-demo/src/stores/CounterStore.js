/**
* @Author: fiyc
* @Date : 2018-12-17 11:09
* @FileName : CounterStore.js
* @Description :
*     - 每个Counter组件的store
*/

import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function(){
        return counterValues;
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

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if(action.type === ActionTypes.COUNTER_CHANGE){
        counterValues[action.counterCaption] += action.value;
        CounterStore.emitChange();
    }
});

export default CounterStore;
