import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
          <p>This is the Home Page</p>

          <Link to="/todos" className="btn btn-primary">
            Todo List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;