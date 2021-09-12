import axios from 'axios'

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_OK = 'GET_TODOS_OK';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export const actionGetTodos = () => ({
    type: GET_TODOS,
});

export const actionGetTodosOk = (todos) => ({
    type: GET_TODOS_OK,
    payload: todos,
});

export const actionGetTodosError = () => ({
    type: GET_TODOS_ERROR,
});


export function getTodos() {

    const baseURL = 'http://localhost:4000';

    return async (dispatch) => {

        dispatch(actionGetTodos());

        try {

            const response = await axios({
                url: `${baseURL}/todos`,
                method: 'GET',
              })

            dispatch(actionGetTodosOk(response.data));

            console.log(response.data)

        } catch (error) {
            console.log(error);
            dispatch(actionGetTodosError());
        }
    }
}