import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/todoContext';
import { ModalTodoAdd } from './ModalTodoAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";



export const TodoItem = ({ titulo, id, color, ejecutada }) => {

    const {removeTodo, resolveTodo, editTodo } = useContext(TodoContext);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalInput, setModalInput] = useState(titulo);

    const onModalInChange = (e) => {
        setModalInput(e.target.value);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal( valor ) {
        setModalInput( valor  );
        setIsOpen(false);
    }

    const marcarTodoCheck = () => {
        resolveTodo(id);
    }

    const eliminarTodo = () => {
        removeTodo( id );
    }

    const handleModalSubmit = (e) => {
        e.preventDefault();
        const valor = modalInput;

        if (!valor || valor.trim().length === 0) return;

        editTodo({
            id,
            valor
        });

        closeModal( valor );
    }

    return (
        <div href="#" className={"list-group-item list-group-item-action" + (ejecutada ? " opacidad" : "")} style={{
            backgroundColor: color
        }} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className={"mb-1 " + (ejecutada ? "line" : "")}>{titulo}</h5>
                <div className="d-grid gap-2 d-md-block" role="group" aria-label="Basic example">
                    <button onClick={marcarTodoCheck}
                        disabled={ejecutada}
                        type="button" className="btn btn-success"><FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={openModal}
                        disabled={ejecutada}
                        type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faEdit} /></button>
                    <button onClick={eliminarTodo}
                        type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>

            <ModalTodoAdd 
            modalIsOpen = { modalIsOpen }
            handleModalSubmit = { handleModalSubmit }
            closeModal = { closeModal }
            modalInput = { modalInput }
            onModalInChange = { onModalInChange }
            valorInicial = { titulo }
            />
        </div>
    )
}
