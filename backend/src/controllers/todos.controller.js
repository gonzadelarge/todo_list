const Todo = require('../models/Todo.model');

const indexGet = async (req, res, next) => {


  try {
    
    const todos = await Todo.find();

    return res.json(todos);

  } catch (error) {

    return next(error);
  }
};

const oneGet = async (req, res, next) => {

  const { id } = req.params;

  try {

    const todo = await Todo.findById(id);

    return res.json(todo);


  } catch (error) {

    return next(error);
  }
};

const createGet = (req, res, next) => {
  return res.json('Página de crear todo');
}

const createPost = async (req, res, next) => {

  const { name, date, message, done } = req.body;

  const newTodo = new Todo({
    name,
    date,
    message,
    done
  });

  const todo = await newTodo.save();

  return res.redirect("/todos/");
};

const editGet = async (req, res, next) =>{

  const { id } = req.params;
  
  try {

    const todo = await Todo.findById(id);
    
    return res.json(todo);

  } catch (error) {

    return next(error);
  }

  
}

const editPost = async (req, res, next) => {

  try {

      const { id, name, date, message, done } = req.body;
  
      const update = {};

      if (name) update.name = name;
      if (date) update.date = date;
      if (message) update.message = message;
      if (done) update.done = done;
  
      const updateTodo = await Todo.findByIdAndUpdate(id, update, { new: true });

      return res.json("Editado con exito");

      
    } catch (error) {
      return next(error);
    }
};

const deletePost = async (req, res, next) => {

  const { id } = req.params;

  try {
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return res.json("El elemento que querías borrar no existe");
    } else {
      return res.redirect("/");
    }

  } catch (error) {
    return next(error);
  }
}

module.exports = { indexGet, createGet, createPost, editGet, editPost, deletePost, oneGet }
