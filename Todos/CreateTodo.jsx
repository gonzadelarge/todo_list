import React from 'react'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const CreateTodo = () => {


  const baseURL = 'http://localhost:4000';

  const insertTodo = async (valores) => {

    const { name, message, done, date } = valores;

    try {
      const response = await axios({
        url: `${baseURL}/todos/create`,
        method: 'POST',
        data: {
            name,
            message,
            done,
            date
          }
      })

      return (response.data);

    } catch (error) {
      console.log(error)
    }

  };



    return (

        <Formik

            initialValues={{
                name: '',
                date: '',
                message: '',
                done: ''
            }}

            validate={(valores) => {

                const errores = {};

                if (!valores.name) {
                    errores.name = 'Escribe algo carajo'
                }
                if (!valores.date) {
                    errores.date = 'No lo dejes vacío gilipollas'
                }
                if (!valores.message) {
                    errores.message = 'No lo dejes vacío gilipollas'
                }
                if (!valores.done) {
                    errores.done = 'No lo dejes vacío gilipollas'
                }

                return errores;
            }}

            onSubmit={(valores, { resetForm }) => {

                resetForm();
                console.log(valores);
                insertTodo(valores);
            }}

        >

            {({ errors }) => (

                <Form className="formulario">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <Field type="text" name="name" id="name" />
                        <ErrorMessage name="name" component={() => (<div className="error"> {errors.name} </div>)} />
                    </div>
                    <div>
                        <label htmlFor="date">Fecha</label>
                        <Field type="text" name="date" id="date" />
                        <ErrorMessage name="date" component={() => (<div className="error"> {errors.date} </div>)} />
                    </div>
                    <div>
                        <label>
                            <Field type="radio" name="done" value={true} /> Hecho
                        <br/>
                            <Field type="radio" name="done" value={false} /> Por hacer    
                        </label>
                        <ErrorMessage name="done" component={() => (<div className="error"> {errors.done} </div>)} />
                    </div>
                    <div>
                        <label htmlFor="message">Apuntes</label>
                        <Field type="text" name="message" id="message" />
                        <ErrorMessage name="message" component={() => (<div className="error"> {errors.message} </div>)} />
                    </div>

                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default CreateTodo
