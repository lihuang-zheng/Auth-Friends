import React from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  // handle the changes of credential
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // login axios, axios with auth is being built in
  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err.message));
  };

  // render the login form, username and password
  render() {
    return (
      <div>
        <h1 className="login-title">Log In</h1>

        <form onSubmit={this.login} className="credential-form">
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="Username"
            className="credential-input"
          />

          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="Password"
            className="credential-input"
          />

          <button className="credential-button">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
