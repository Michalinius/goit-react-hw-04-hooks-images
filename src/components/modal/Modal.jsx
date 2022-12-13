import React from "react";

class Modal extends React.Component {

    closeModal = (event) => {
        event.stopPropagation()
        document.querySelector(`.Overlay`).style.display = "none";
        document.querySelector(`.Overlay img`).src = ""
    }

    render() {
        return (
            <div onClick={this.closeModal} className="Overlay" >
                <div className="Modal">
                    <img src="" alt="Big img" />
                </div>
            </div>
        )
    }
}

export default Modal;
