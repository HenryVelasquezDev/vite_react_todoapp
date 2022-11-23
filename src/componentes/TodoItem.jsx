import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const TodoItem = ({ titulo, id, setTodoList,listaTodo }) => {

    const marcarTodoCheck = () => {
        const lista = listaTodo.map( (todo) => {
            if ( todo.id === id){
                todo.status = !todo.status
            }
            return todo;
        });

        setTodoList( lista );
    }

    const eliminarTodo = () => {
        const lista = listaTodo.filter( todo => todo.id !== id );

        setTodoList( lista );
    }
    
    return (
        <div href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{titulo}</h5>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={marcarTodoCheck} 
                            type="button" className="btn btn-success"><FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={ eliminarTodo }
                            type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>
        </div>
    )
}
