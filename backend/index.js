const express = require("express");
const path = require('path');
const methodOverride = require('method-override');
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');

const indexRoutes = require('../backend/src/routes/index.routes');
const todoRoutes = require("../backend/src/routes/todo.routes");

const db = require('../backend/src/config/db.config');
db.connect();

const PORT = process.env.PORT || 4000

dotenv.config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', '*')
    next();
  });

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 app.use(methodOverride('_method'));

app.use("/", indexRoutes);
app.use("/todos", todoRoutes);

app.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    return res.json(error.message);
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
});

app.listen(PORT, () => console.log(`Servidor a tota virolla en http://localhost:${PORT}`))