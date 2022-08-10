import Form from "../components/Form"
import { Button,Modal } from "react-bootstrap"
import { useState } from "react";
const Contact = () =>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stateFromChild,setStateFromChild]=useState('')

  console.log('statefromchild = '+stateFromChild)
    return (<><h3>This is Contact</h3>
                 <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form setShow={setShow} show={show} setStateFromChild={setStateFromChild}/></Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>
      
      
      
   </>)

}

export default Contact