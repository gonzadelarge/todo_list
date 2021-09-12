import { combineReducers } from "redux";

import TodosReducer from './Todos.Reducer'
import todoReducer from "./Todo.Reducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
  todo: todoReducer,
});

export default rootReducer;