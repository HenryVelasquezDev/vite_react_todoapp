import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const TodoItem = ({ titulo, id, setTodoList, listaTodo }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const marcarTodoCheck = () => {
        const lista = listaTodo.map((todo) => {
            if (todo.id === id) {
                todo.status = !todo.status
            }
            return todo;
        });

        setTodoList(lista);
    }

    const eliminarTodo = () => {
        const lista = listaTodo.filter(todo => todo.id !== id);

        setTodoList(lista);
    }

    return (
        <div href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{titulo}</h5>
                <div className="d-grid gap-2 d-md-block" role="group" aria-label="Basic example">
                    <button onClick={marcarTodoCheck}
                        type="button" className="btn btn-success"><FontAwesomeIcon icon={faCheck} /></button>
                    <button onClick={openModal}
                        type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faEdit} /></button>
                    <button onClick={eliminarTodo}
                        type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                // onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    )
}
