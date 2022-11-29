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

    const addToTodoList = (valor) => {
        dispatch( {
            type: types.addTodo,
            payload: valor
        });
    }
    
    const removeTodo = (id) => {        
        dispatch({
            type: types.removeTodo,
            payload: id
        });
    }
    
    const resolveTodo = (id) => {             
        dispatch({
            type: types.resolveTodo,
            payload: id
        });
    }
    
    const editTodo = ({id,valor}) => {             
        dispatch({
            type: types.editTodo,
            payload: {
                id,
                valor
            }
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
            <AgregarTodoForm AddTodoList={addToTodoList} />
            <TodoList listaTodo={todoList} removeTodo={removeTodo} resolveTodo = {resolveTodo} editTodo={editTodo}/>
        </div>
    )
}
