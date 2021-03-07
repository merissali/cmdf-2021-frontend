import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

// import Index from "./views/Index.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import Explore from "./pages/Explore.js";
import Dashboard from './pages/Dashboard'
// import Register from "views/examples/Register.js";


class Router extends Component {
    constructor () {
      super()
      this.state = {
        loaded: false
      }
    }
    render () {
    
        return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/login-page" exact render={props => <Login {...props} />} /> */}
          <Route
            exac path="/profile" component={Profile} />
          {/* <Route
            exact
            path="/dashboard"
            render={() => <Dashboard />}
          /> */}
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/profile-dashboard' component={Dashboard} />
          {/* <Route
            path="/register-page"
            exact
            render={props => <Register {...props} />}
          />
          <Redirect to="/" /> */}
        </Switch>
        </BrowserRouter>
       
        )
      }
    }
export default Router;