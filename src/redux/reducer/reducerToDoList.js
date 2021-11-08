const initialState = {
  taskList: [
    { id: 1, description: "JavaScript Project", done: false },
    { id: 2, description: "Redux", done: false },
    { id: 3, description: "React Components ", done: false }
  ],
  statutdone: ""
};
const toDoList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        taskList: [
          ...state.taskList,
          { id: Math.random(), description: action.payload, done: false }
        ]
      };
    case "DELETE":
      return {
        ...state,
        taskList: [...state.taskList.filter((e) => e.id !== action.payload)]
      };
    case "DONE":
      return {
        ...state,
        taskList: [
          ...state.taskList.map((e) =>
            e.id === action.payload ? { ...e, done: !e.done } : e
          )
        ]
      };
    case "EDIT":
      return {
        ...state,
        taskList: [
          ...state.taskList.map((e) =>
            e.id === action.payload.id
              ? { ...e, description: action.payload.neww }
              : e
          )
        ]
      };
    case "FILTRETASK":
      return {
        ...state,
        statutdone: action.payload
      };
    default:
      return state;
  }
};
export default toDoList;
