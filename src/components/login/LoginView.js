import React from "react";
import { Link } from "react-router-dom";
import TextFildIndput from "../common/TextFildIndput";

function LoginView(props) {
  // const { error } = props.login.message;
  // const { error, isLoading } = props.login;

  return (
    // <!-- Login card started-->

    <div className="container">
      <div
        className="card mx-auto mt-5 shadow rounded"
        style={{ width: "35rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          {/* <!-- Login form start--> */}
          <form autoComplete="off" onSubmit={props.handalSubmit} required>
            <TextFildIndput
              type="email"
              name="email"
              className="form-control"
              id="userEmail"
              placeholder="abc@gmail.com"
              aria-describedby="emailHelp"
              value={props.email}
              onChange={props.handalChange}
              lblText="Email Id"
              infoText=" We'll never share your email with anyone else."
              // error={error.email}
              required
            />

            <TextFildIndput
              type="password"
              className="form-control"
              placeholder="******"
              name="password"
              id="userPassword"
              value={props.password}
              onChange={props.handalChange}
              lblText="Password"
              infoText="Passwod must greater then 6 character"
              // error={error.password}
              required
            />

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-warning w-100 shadow btn-sm "
            >
              Submit
            </button>
          </form>
          {/* <!--Login form end--> */}

          {/* <!-- OR seperator--> */}
          <hr className="hr-text" data-content="New to Amazon?" />

          {/* <!-- Create account button--> */}
          <Link to="/register" className="btn btn-dark mt-2 w-100">
            {" "}
            Create your Amazon Account{" "}
          </Link>
          <a href="/#" className="btn btn-outline-success mt-2 w-100">
            <i className="fab fa-google"></i> Sing in with Google
          </a>
          <a href="/#" className="btn btn-outline-primary mt-2 w-100">
            <i className="fab fa-facebook-f"></i> Sing in with Facebook
          </a>
        </div>
      </div>
    </div>

    // login card end here
  );
}

export default LoginView;
