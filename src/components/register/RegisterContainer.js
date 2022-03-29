import React, { Component } from "react";
import RegisterView from "./RegisterView";
import { registerRequest } from "./../redux/actions/registerActions";

import {} from "react-router-dom";
import { connect } from "react-redux";
import { submitAction } from "./../redux/actions/registerActions";
// import { withRouter } from "react-router-dom";

// import { withRouter } from "react-router";
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
    const user = {
      userName: this.state.name,
      email: this.state.email,
      password: this.state.password1,
    };

    this.props.registerRequest(user);

    // submitAction(user);
    this.setState({
      name: "",
      email: "",
      password1: "",
      password2: "",
    });

    console.log(this.state);

    alert("submit button clicked");
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

const mapStateToProps = (state) => ({
  register: state.register,
});

const mapDispacthToProps = {
  registerRequest,
};

export default connect(mapStateToProps, mapDispacthToProps)(RegisterContainer);
//(withRouter(RegisterContainer))
//(RegisterContainer);
