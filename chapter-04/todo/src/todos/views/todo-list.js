/**
* @Author: fiyc
* @Date : 2018-12-18 14:40
* @FileName : todo-list.js
* @Description :
*     - todo 列表组件
*/
import React from 'react';
import TodoItem from './todo-item';
import {FilterTypes} from '../../constants'
import * as actions from '../actions'
import { connect } from 'react-redux';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
        {
            todos.map(item => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    completed={item.completed}
                    onToggle={() => onToggleTodo(item.id)}
                    onRemove={() => onRemoveTodo(item.id)}
                />
            ))
        }
        </ul>
    );
}

const mapState = (state, ownProps) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
}

const mapDispatch = (dispath, ownProps) => {
    return {
        onToggleTodo: id => {
            dispath(actions.troggle(id));
        },

        onRemoveTodo: id => {
            dispath(actions.remove(id));
        }
    };
}

const selectVisibleTodos = (todos, filter) => {
    switch(filter){
        case FilterTypes.All: {
            return todos;
        }

        case FilterTypes.COMPLETED: {
            return todos.filter(item => item.completed);
        }

        case FilterTypes.UNCOMPLETED: {
            return todos.filter(item => !item.completed);
        }

        default: {
            return todos;
        }
    }
}

export default connect(mapState, mapDispatch)(TodoList);