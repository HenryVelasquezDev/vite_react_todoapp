import React, { useContext } from 'react';
import { AgregarTodoForm } from './componentes/AgregarTodoForm';
import { TodoList } from './componentes/TodoList';
import { TodoContext } from './context/todoContext';
import { TodoProvider } from './context/todoProvider';
import { useTodo } from './hooks/useTodo';



export const TodoApp = () => {

    return (
        <TodoProvider>

            <div className='container my-5'>
                <div className="col-12 text-center">
                    <h1> Todo App </h1>
                </div>
                <AgregarTodoForm />
                <TodoList />
            </div>
        </TodoProvider>
    )
}
