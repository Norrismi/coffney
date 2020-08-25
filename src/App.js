import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/checkout"} component={Checkout} />
        <Route path={"/contact"} component={Contact} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
