import React from 'react';
import Modal from 'react-modal';

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

export const ModalTodoAdd = ({modalIsOpen,handleModalSubmit,closeModal,modalInput,onModalInChange,valorInicial}) => {
    return (
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
                    <button className="btn btn-danger" onClick={() => closeModal(valorInicial)} >Cancelar</button>
                </form>
            </div>
        </Modal>
    )
}
