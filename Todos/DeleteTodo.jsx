import React from 'react'
import axios from 'axios';

function DeleteTodo() {

    const deleteTodo = async () => {

        const baseURL = 'http://localhost:4000';
        const todoForDelete = '613ce2514419e0179885bea7';

        try {
            
            const response = await axios({
              url: `${baseURL}/todos/delete/${todoForDelete}`,
              method: 'DELETE',
            })

            console.log('Le has dado a borrar')
      
            return (response.data);
      
          } catch (error) {
            console.log(error)
          }
    }

    return (
        <div>
            <button onClick={deleteTodo} className="todos__btn">Borrar</button>
        </div>
    )
}

export default DeleteTodo
