import { Badge } from "reactstrap";
import { useDispatch } from "react-redux";
import { deete, done } from "../redux/action/actionToDoList";
import Ediit from "./Ediit";
const Task = ({ e }) => {
  const dispatch = useDispatch();
  const editing = () => {};
  return (
    <div class="todoList">
      <div class="items">
        <input id="item1" type="checkbox" checked />

        <label for="item1">
          {e.done === true ? (
            <p style={{ color: "red", textDecoration: "line-through" }}>
              {e.description}
            </p>
          ) : (
            e.description
          )}

          <Badge color="primary" pill onClick={() => dispatch(done(e.id))}>
            DONE
          </Badge>

          <Ediit e={e.id} />

          <Badge color="danger" pill onClick={() => dispatch(deete(e.id))}>
            DELETE
          </Badge>
        </label>
      </div>
    </div>
  );
};
export default Task;
