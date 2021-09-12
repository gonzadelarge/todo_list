import * as actions from "../actions/Todo.Actions";

export const initialState = {
  todo: {},
  errors: false,
  loading: true,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TODO:
      return { ...state, loading: true };
    case actions.GET_TODO_OK:
      return { todo: action.payload, loading: false, errors: false };
    case actions.GET_TODO_ERROR:
      return { ...state, loading: false, errors: true };
    default:
      return state;
  }
}