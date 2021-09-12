import React, { useState } from 'react'
import axios from 'axios';

const Todos = () => {

  const baseURL = 'http://localhost:4000';

  const [todos, setTodos] = useState([])

  const searchTodos = async () => {

    try {
      const response = await axios({
        url: `${baseURL}/todos`,
        method: 'GET',
      })

      return mapTodos(response.data);

    } catch (error) {
      console.log(error)
    }

  };

  const mapTodos = (data) => {

    setTodos(...todos, data);
  }

  return (

    <div className="todos">
      <button className="todos__btn" onClick={searchTodos}>TODOS</button>
      <div className="todos__list">


        {todos.map((todo) => {

          return (
            <div className="todos__card" key={todo._id}>
              <p className="todos__done">{todo.done}</p>
              <h3 className="todos__name">{todo.name}</h3>
              <div>
                <p className="todos__date">{todo.date}</p>
                <p className="todos__message">{todo.message}</p>
                <button className="todos__btn">EDITAR</button>
                <button className="todos__btn">ELIMINAR</button>
              </div>
            </div>
          );

        })}
      </div>
    </div>
  )
}

export default Todos
