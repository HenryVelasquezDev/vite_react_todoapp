import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ listaTodo, dispatchTodo }) => {
    return (
        <div className="list-group my-4">
            {
                listaTodo.map(todo => (
                    <TodoItem key={todo.id} dispatchTodo={dispatchTodo} {...todo} />
                ))
            }
        </div>
    )
}
