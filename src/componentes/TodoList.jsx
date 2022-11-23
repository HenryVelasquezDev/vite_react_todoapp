import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ listaTodo, setTodoList }) => {
    return (
        <div className="list-group my-4">
            {
                listaTodo.map(todo => (
                    <TodoItem key={todo.id} listaTodo={listaTodo} setTodoList={setTodoList} {...todo} />
                ))
            }
        </div>
    )
}
