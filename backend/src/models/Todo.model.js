const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        name: { type: String, required: true },
        date: { type: String },
        message: { type: String },
        done: { type: Boolean, default: false },
    },
    { timestamps: true }
);  

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;