import { Modal, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { edit } from "../redux/action/actionToDoList";
import { useDispatch } from "react-redux";

import { Badge } from "reactstrap";

import { useState } from "react";
function Ediit({ e }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit = () => {
    dispatch(edit(e, msg));
    handleClose();
  };

  return (
    <>
      <Badge pill onClick={handleShow}>
        EDIT
      </Badge>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Input
          id="exampleEmail2"
          name="email"
          placeholder="Edit Description"
          type="text"
          height="100px"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />{" "}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => submit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Ediit;
