import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

// import Index from "./views/Index.js";
import Landing from "./pages/Landing.js";
// import Login from "views/examples/Login.js";
import Profile from "./pages/Profile.js";
// import Register from "views/examples/Register.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path='/' exact render={props => <Landing {...props} />}/>
//       {/* <Route path="/login-page" exact render={props => <Login {...props} />} /> */}
//       <Route
//         path='/profile'
//         exact
//         render={props => <Profile {...props} />}
//       />
//       {/* <Route
//         path="/register-page"
//         exact
//         render={props => <Register {...props} />}
//       />
//       <Redirect to="/" /> */}
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

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
          <Route exact path="/" render={() => <Landing />}/>
          {/* <Route path="/login-page" exact render={props => <Login {...props} />} /> */}
          <Route
            path="/profile"
            exact
            render={() => <Profile />}
          />
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