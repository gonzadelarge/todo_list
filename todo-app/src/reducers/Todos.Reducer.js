import * as actions from '../actions/Todos.Actions';

export const initialState = {
    todos: [],
    errors: false,
    loading: false,
  };
  
  export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case actions.GET_TODOS:
        return { ...state, loading: true };
      case actions.GET_TODOS_OK:
        return { todos: action.payload, loading: false, errors: false };
      case actions.GET_TODOS_ERROR:
        return { ...state, loading: false, errors: true };
      default:
        return state;
    }
  }