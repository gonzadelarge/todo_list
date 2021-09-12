import React from 'react'
import {Link} from 'react-router-dom';

const ToDo = ({ todo, summary = false }) => {
    return (
        <article>
            {summary ? <h2>{todo.name}</h2> : <h1>{todo.name}</h1>}
            <hr />
            {summary && (
                <Link to={`/todos/todo/${todo._id}`} className="btn btn-primary">
                    Ver Todo
                </Link>
            )}
            <hr />
        </article>
    )
}

export default ToDo
