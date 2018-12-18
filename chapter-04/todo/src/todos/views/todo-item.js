/**
* @Author: fiyc
* @Date : 2018-12-18 14:57
* @FileName : todo-item.js
* @Description :
*     - todo 单个项 组件
*/
import React from 'react';

const TodoItem = ({text, completed, onToggle, onRemove}) => {
    return (
        <li 
            className="todo-item"
            style={{
                textDecoration: completed ? "line-through" : 'none'
            }}>
            
            <input className="toggle" type="checkbox" checked={completed ? "checked": ""}
                readOnly onClick={onToggle}/>
            
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>x</button>
        </li>
    );
}

export default TodoItem