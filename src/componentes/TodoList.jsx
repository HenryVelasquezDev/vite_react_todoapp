import React, { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {

    const {todoList:listaTodo } = useContext(TodoContext);

    return (
        <div className="list-group my-4">
            {
                listaTodo.map(todo => (
                    <TodoItem key={todo.id} 
                    {...todo} />
                ))
            }
        </div>
    )
}
