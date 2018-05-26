import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Contact from "./Contact";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Verbatek</h1>
          <ul className="header">
            <li><NavLink className = "head-font" exact to="/">Home</NavLink></li>
            <li><NavLink className = "head-font" to="/list">Lists</NavLink></li>
            <li><NavLink className = "head-font" to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;