import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./components/Home";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Users from "./components/Users";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
