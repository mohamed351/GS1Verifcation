
import {Modal, Button} from "react-bootstrap";
export default function BasicModal({handleShow , handleClose ,message, show}) {
   
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error </Modal.Title>
          </Modal.Header>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        
          </Modal.Footer>
        </Modal>
      </>
    );
  }