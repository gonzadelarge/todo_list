import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { actionGetTodoFunction } from "../actions/Todo.Actions";
import ToDo from '../components/Todo/ToDo'

function ToDoPage({ match, dispatch, todo, errors, loading }) {

    useEffect(() => {
        const { todoId } = match.params;
        dispatch(actionGetTodoFunction(todoId));

    }, [dispatch, match]);

    const showTodo = () => {

        if (loading.todo) return <p>Loading todo...</p>;
        if (errors.todo) return <p>There has been an error.</p>;

        return <ToDo todo={todo} summary={false} />;
    };

    return (
        <div className="container">
            {showTodo()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    post: state.todo.todo,
    errors: { todo: state.todo.errors },
    loading: { todo: state.todo.loading },
  });

export default connect(mapStateToProps)(ToDoPage) 
