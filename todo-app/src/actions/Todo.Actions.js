import axios from "axios";

export const GET_TODO = "GET_TODO";
export const GET_TODO_OK = "GET_TODO_OK";
export const GET_TODO_ERROR = "GET_TODO_ERROR";

export const actionGetTodo = () => ({
  type: GET_TODO,
});

export const actionGetTodoOk = (todo) => ({
  type: GET_TODO_OK,
  payload: todo,
});

export const actionGetTodoError = () => ({
  type: GET_TODO_ERROR,
});

export function actionGetTodoFunction(todoId) {

  const baseURL = 'http://localhost:4000';

  return async (dispatch) => {
    dispatch(actionGetTodo());

    try {
      const response = await axios({
        url: `${baseURL}/todos/todo/${todoId}`,
        method: 'GET',
      })

    dispatch(actionGetTodoOk(response.data));
    console.log(response.data)

    } catch (error) {
      console.log(error);
      dispatch(actionGetTodoError());
    }
  };
}