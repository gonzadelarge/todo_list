import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { getTodos } from '../actions/Todos.Actions';
import ToDo from '../components/Todo/ToDo'

const ToDos = ({ dispatch, todos, loading, errors }) => {

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const showTodos = () => {

        if (loading) return <p>Loading todos...</p>
        if (errors) return <p>There has been an error.</p>

        return todos.map((todo) => <ToDo key={todo._id} todo={todo} summary={true} />);
    }

    return (
        <div>
            <div>Estas en la lista de los TODOS</div>
            <hr />
            {showTodos()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos,
    errores: state.todos.errors,
    cargando: state.todos.loading,
  });

export default connect(mapStateToProps)(ToDos)
