import React from "react";

// stlying for app
import "./App.css";

// import components
import Login from "./Components/Login";
import Friends from "./Components/Friends";

// import private route and dependency
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./Utils/axiosWithAuth";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route exact path="/" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
