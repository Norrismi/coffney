import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import "font-awesome/css/font-awesome.min.css";
import { useStateValue } from "./components/ContextAPI/StateProvider";
import { auth } from "./index";

function App() {
  const [{user}, dispatch] = useStateValue();

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  console.log(user)
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/checkout"} component={Checkout} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/login"} component={Login} />
        <Route exact path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
