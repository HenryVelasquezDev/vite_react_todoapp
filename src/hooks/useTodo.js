
import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../reducer/todoReducer';
import { types } from '../types/types';

const init = () => {
    /*se utiliza el || para indicar que si el objeto del parse es null retore el arreglo vacio */
    const lista = JSON.parse(localStorage.getItem('todoList')) || [];
    return lista.filter(item => (!item.ejecutada));
}

export const useTodo = () => {

    const [todoList, dispatch] = useReducer(todoReducer, [], init);

    
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList])

    const addToTodoList = (valor) => {
        dispatch({
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

    const editTodo = ({ id, valor }) => {
        dispatch({
            type: types.editTodo,
            payload: {
                id,
                valor
            }
        });
    }




    return {
        todoList,
        addToTodoList,
        removeTodo,
        resolveTodo,
        editTodo
    }
}
