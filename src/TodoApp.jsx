import React, { useEffect, useState } from 'react';
import { AgregarTodoForm } from './componentes/AgregarTodoForm';
import { TodoList } from './componentes/TodoList';

export const TodoApp = () => {

    const [todoList, setTodoList] = useState([]);

    const AddToTodoList = (valor) => {
        setTodoList([...todoList, valor]);
    }

    useEffect(() => {
        if (localStorage.getItem('todoList') === null) return;
        const lista = JSON.parse(localStorage.getItem('todoList'));

        const listaPendientes = lista.filter( item => ( !item.ejecutada ) )

        console.log(listaPendientes)
        setTodoList(listaPendientes);
    }, [])


    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList])


    return (
        <div className='container my-5'>
            <div className="col-12 text-center">
                <h1> Todo App </h1>
            </div>
            <AgregarTodoForm AddTodoList={AddToTodoList} />
            <TodoList listaTodo={todoList} setTodoList={setTodoList} />
        </div>
    )
}
