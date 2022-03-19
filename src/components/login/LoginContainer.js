import React, { Component } from "react";
import LoginView from "./LoginView";
import { apiBaseurl } from "./../../utils/constant";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handalChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handalSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    alert("email :" + this.state.email + " Password: " + this.state.password);
    alert(`Base url is :${apiBaseurl}`);
  };

  render() {
    return (
      <LoginView
        handalChange={this.handalChange}
        handalSubmit={this.handalSubmit}
        {...this.state}
      />
    );
  }
}

export default LoginContainer;
