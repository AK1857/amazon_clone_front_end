import React, { Component } from "react";
import RegisterView from "./RegisterView";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
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
  };
  render() {
    return (
      <div>
        <RegisterView
          handalChange={this.handalChange}
          handalSubmit={this.handalSubmit}
          {...this.state}
        />
      </div>
    );
  }
}

export default RegisterContainer;
