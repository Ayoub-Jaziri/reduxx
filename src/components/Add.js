import { useState } from "react";
import { Form, Input, Col, FormGroup, Button } from "reactstrap";
import { add } from "../redux/action/actionToDoList";
import { useDispatch } from "react-redux";
import Filtre from "./Filter";

const Add = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const adding = () => {
    dispatch(add(msg));
    setMsg("");
  };

  return (
    <div>
      <Form
        style={{
          marginLeft: "34%",
          marginTop: "10%"
        }}
      >
        <FormGroup row>
          <Col sm={5}>
            <Input
              id="exampleEmail2"
              name="email"
              placeholder="Add Description"
              type="text"
              height="100px"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <Filtre />
          </Col>
          <Col sm={1}>
            <Button color="primary" onClick={() => adding()}>
              Add
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Add;
