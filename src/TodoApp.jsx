import React from 'react';
import { AgregarTodoForm } from './componentes/AgregarTodoForm';
import { TodoList } from './componentes/TodoList';
import { useTodo } from './hooks/useTodo';



export const TodoApp = () => {

    const {todoList, addToTodoList, removeTodo, resolveTodo, editTodo } = useTodo();

    return (
        <div className='container my-5'>
            <div className="col-12 text-center">
                <h1> Todo App </h1>
            </div>
            <AgregarTodoForm AddTodoList={addToTodoList} />
            <TodoList listaTodo={todoList} removeTodo={removeTodo} resolveTodo = {resolveTodo} editTodo={editTodo}/>
        </div>
    )
}
