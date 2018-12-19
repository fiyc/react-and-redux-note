/**
* @Author: fiyc
* @Date : 2018-12-18 15:05
* @FileName : todo.js
* @Description :
*     - todo 组合模块
*/

import React from 'react';
import AddTodo from './add-todo';
import TodoList from './todo-list';

import './style.css';

export default () => {
    return (
        <div className="todos">
            <AddTodo/>
            <TodoList/>
        </div>
    );
}