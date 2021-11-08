import "./styles.css";
import Add from "./components/Add";
import TaskList from "./components/TaskList";
import Ediit from "./components/Ediit";

export default function App() {
  return (
    <div className="App">
      <Add />
      <TaskList />
    </div>
  );
}
