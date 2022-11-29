import React, { useEffect, useReducer, useState } from 'react';
import { AgregarTodoForm } from './componentes/AgregarTodoForm';
import { TodoList } from './componentes/TodoList';
import { todoReducer } from './reducer/todoReducer';
import { types } from './types/types';

const init = () => {
    /*se utiliza el || para indicar que si el objeto del parse es null retore el arreglo vacio */
    const lista = JSON.parse(localStorage.getItem('todoList')) || [];
    return lista.filter( item => ( !item.ejecutada ) );
}

export const TodoApp = () => {

    const [todoList, dispatch] = useReducer(todoReducer, [], init);

    const AddToTodoList = (valor) => {
        dispatch( {
            type: types.addTodo,
            payload: valor
        });
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList])


    return (
        <div className='container my-5'>
            <div className="col-12 text-center">
                <h1> Todo App </h1>
            </div>
            <AgregarTodoForm AddTodoList={AddToTodoList} />
            <TodoList listaTodo={todoList} dispatchTodo={dispatch} />
        </div>
    )
}
