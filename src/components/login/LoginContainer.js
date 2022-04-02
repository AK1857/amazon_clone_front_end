import React, { Component } from "react";
import LoginView from "./LoginView";
//import { apiBaseurl } from "./../../utils/constant";
import { loginRequest } from "./../redux/actions/loginActions";
import { connect } from "react-redux";
//import store from "../redux/stores";

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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginRequest(userData);
    // console.log(this.state);
    // alert("email :" + this.state.email + " Password: " + this.state.password);
    // alert(`Base url is :${apiBaseurl}`);
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

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispacthToProps = {
  loginRequest,
};

//export default LoginContainer;
export default connect(mapStateToProps, mapDispacthToProps)(LoginContainer);
