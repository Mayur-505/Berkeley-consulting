import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const customStyles: any = {

    content: {
        // top: '31%',
        left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        transform: 'translate(-50%, 0%)',
        background: "none",
        border: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        width: "1440px"
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        background: "none",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(3px)",

        // filter: "blur(3px)"
    },
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