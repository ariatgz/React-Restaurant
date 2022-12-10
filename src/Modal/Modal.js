import './Modal.css'
import ReactDOM from "react-dom/client";
import PortalReactDOM from 'react-dom'
import ModalCore from "./ModalCore";

function ModalBuilder(props) {


    function closeModal() {
        props.onClose();
    }
    function Remove(name) {
        props.onRemove(name);
    }

    function Add(name) {
        props.onAdd(name);
    }

    return (
        <div  className="modal-bg">
            <ModalCore onAdd={Add} onRemove={Remove}  onClose={closeModal} />
        </div>
    )
}

function Modal(props) {
    function closeModal() {
        props.onClose();
    }

    function remover(name) {
        props.onRemove(name);
    }

    function Add(name) {
        props.onAdd(name);
    }

    return PortalReactDOM.createPortal(<ModalBuilder onAdd={Add} onRemove={remover} onClose={closeModal} />,document.getElementById('modal'));

}

export default Modal