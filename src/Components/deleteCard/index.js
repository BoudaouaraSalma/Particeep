import React,{useState} from "react";
import{Button,Modal} from "react-bootstrap";
import {connect} from 'react-redux'
import {deleteCard} from "../../actions/Action";

function DeleteCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)

    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Remove
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Remove Film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   You are sure to delete this film !
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>props.deleteCard(props.index)}>Remove</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
const mapDispatchToProps=dispatch=>{
    return{
        deleteCard:id=> dispatch(deleteCard(id)),}
}
export default connect(null,mapDispatchToProps)(DeleteCard)
