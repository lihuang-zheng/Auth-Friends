import React from "react";

// stlying for app
import "./App.css";

// import components
import Login from "./Components/Login";
import Friends from "./Components/Friends";

// import private route and dependency
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route />
        <PrivateRoute />
        <Route />
      </div>
    </BrowserRouter>
  );
}

export default App;
