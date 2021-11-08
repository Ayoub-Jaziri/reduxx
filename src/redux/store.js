import { createStore } from "redux";
import reducerToDoList from "../redux/reducer/reducerToDoList";
const store = createStore(
  reducerToDoList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
