import { useRef } from "react";

const Modal = (props) => {
    const modalRef = useRef();

    const handleClick = (e) => {
        if(modalRef.current === e.target){
            props.closeModal(false)
        }
    }
    const handleCloseClick = (e) => {
        props.closeModal(false)
    }

    return (
        <div id="modalBackground" ref={modalRef} onClick={handleClick}>
            <div id="modalBox">
                <p id="closeIcon" onClick={handleCloseClick}>x</p>
                <div id="leftSection">
                    <img src={props.product.image} alt="digimon"/>
                </div>
                <div id="rightSecion">
                    <h5>{props.product.name}</h5>
                    <h1>{props.product.species}</h1>  
                    <h2>{props.product.status}</h2>    
                    <h4>{props.product.gender}</h4>    
                    <h2>{props.product.origin}</h2>                   
                </div>
            </div>
        </div>
    )
}

export default Modal;