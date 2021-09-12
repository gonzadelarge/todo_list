import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import ToDos from "./pages/ToDos";
import ToDoPage from "./pages/ToDoPage";
import { Menu } from "./components/Menu/Menu";


function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={ToDos} />
        <Route exact path="/todos/todo/:id" component={ToDoPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;