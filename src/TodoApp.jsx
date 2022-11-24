import React, { useState } from 'react';
import { AgregarTodoForm } from './componentes/AgregarTodoForm';
import { TodoList } from './componentes/TodoList';

export const TodoApp = () => {

    const [todoList, setTodoList] = useState([]);

    const AddToTodoList = (valor) => {
        setTodoList([...todoList, valor]);
    }

    return (
        <div className='container my-5'>
            <div className="col-12 text-center">
                <h1> Todo App </h1>
            </div>
            <AgregarTodoForm AddTodoList={AddToTodoList} />
            <TodoList listaTodo={todoList} setTodoList={setTodoList}/>
        </div>
    )
}
