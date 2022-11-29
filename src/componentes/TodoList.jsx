import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ listaTodo, removeTodo,resolveTodo,editTodo }) => {
    return (
        <div className="list-group my-4">
            {
                listaTodo.map(todo => (
                    <TodoItem key={todo.id} 
                    removeTodo={removeTodo} 
                    resolveTodo={resolveTodo} 
                    editTodo = {editTodo}
                    {...todo} />
                ))
            }
        </div>
    )
}
