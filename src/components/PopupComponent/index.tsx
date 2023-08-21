import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const customStyles: any = {
    overlay: {
        // backgroundColor: 'rgba(0, 0, 0, 0.6)'
        backgroundColor: 'rgb(235 235 235 / 49%)',
        width: '100%',
        // opacity: '0.9'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '95%',
        width: '90%',
        border: 'none',
        borderRadius: '24px'
    }
};
const PopupCompoent = ({ onClose, children }: any) => {

    return (
        <Modal
            isOpen={true}
            // onAfterOpen={afterOpenModal}
            onRequestClose={onClose}
            style={customStyles}
            // className={"modalView"}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>

    )
}

export default PopupCompoent