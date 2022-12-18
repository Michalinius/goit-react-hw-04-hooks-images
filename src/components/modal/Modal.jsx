import React from "react";

const Modal = () => {

    const closeModal = (event) => {
        event.stopPropagation()
        document.querySelector(`.Overlay`).style.display = "none";
        document.querySelector(`.Overlay img`).src = ""
    }

    return (
        <div onClick={closeModal} className="Overlay" >
            <div className="Modal">
                <img src="" alt="Big img" />
            </div>
        </div>
    )
}

export default Modal;
