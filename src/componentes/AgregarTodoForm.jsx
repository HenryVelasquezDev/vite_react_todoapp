import React, { useState } from 'react';
import randomColor from "randomcolor";

export const AgregarTodoForm = ({ AddTodoList }) => {

    const [todoInput, setTodoInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todoInput || todoInput.trim().length === 0 ) return;

        AddTodoList(
            {titulo:todoInput, 
             ejecutada: false, 
             id: new Date().getTime() ,
             color: randomColor()
            }
        );

        setTodoInput('');
    }

    const handleChangeValue = (e) => {
        setTodoInput(e.target.value);
    }

    return (
        <form className="d-flex" role="search"   onSubmit={ handleSubmit }>
            <input className="form-control me-2"
            value={ todoInput } 
            onChange={ handleChangeValue }
            placeholder="Buscar..."
            type="text" />
            <button className="btn btn-primary" type='submit'>Agregar</button>
        </form>
    )
}
