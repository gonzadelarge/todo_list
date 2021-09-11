const express = require("express");
const passport = require("passport");
const path = require('path');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const session = require('express-session');
const dotenv = require("dotenv");
const app = express();


const indexRoutes = require('../backend/src/routes/index.routes');
const todoRoutes = require("../backend/src/routes/todo.routes");

const db = require('../backend/src/config/db.config');
db.connect();

const PORT = process.env.PORT || 4000

dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    store: MongoStore.create({ mongoUrl: db.DB_URL }),
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    req.isAuth = req.isAuthenticated();
    next();
 });

 app.use(methodOverride('_method'));

app.use("/", indexRoutes);
app.use("/todos", todoRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    return res.json(error.message);
});

app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error')
});

app.listen(PORT, () => console.log(`Servidor a tota virolla en http://localhost:${PORT}`))