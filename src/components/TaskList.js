import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const list = useSelector((state) => state.taskList);
  const filtre = useSelector((state) => state.statutdone);

  return (
    <div>
      {filtre === "done"
        ? list
            .filter((task) => task.done === true)
            .map((task) => <Task e={task} key={task.id} />)
        : filtre === "undone"
        ? list
            .filter((task) => task.done === false)
            .map((task) => <Task e={task} key={task.id} />)
        : list.map((task) => <Task e={task} key={task.id} />)}
    </div>
  );
};
export default TaskList;
