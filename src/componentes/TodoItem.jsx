import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { types } from '../types/types';

const customStyles = {
    content: {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const TodoItem = ({ titulo, id, color, ejecutada, dispatchTodo }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalInput, setModalInput] = useState(titulo);

    const onModalInChange = (e) => {
        setModalInput(e.target.value);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setModalInput( titulo );
        setIsOpen(false);
    }

    const marcarTodoCheck = () => {
        dispatchTodo({
            type: types.resolveTodo,
            payload: id
        });
    }

    const eliminarTodo = () => {
        dispatchTodo({
            type: types.removeTodo,
            payload: id
        });
    }

    const handleModalSubmit = (e) => {
        e.preventDefault();
        const valor = modalInput;

        if (!valor || valor.trim().length === 0) return;

        dispatchTodo({
            type: types.editTodo,
            payload: {
                id,
                valor
            }
        });

        closeModal();
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

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
                className="modal"
                overlayClassName="modal-fondo"
            >
                <div className="container">
                    <form className="d-flex" role="search" onSubmit={handleModalSubmit}>
                        <input className="form-control me-2"
                            placeholder="Buscar..."
                            value={modalInput}
                            onChange={onModalInChange}
                            type="text" />
                        <button className="btn btn-primary" type='submit'>Modificar</button>
                        <button className="btn btn-danger" onClick={closeModal} >Cancelar</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
