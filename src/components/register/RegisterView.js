import React from "react";
import { Link } from "react-router-dom";
import TextFildIndput from "../common/TextFildIndput";

function RegisterView(props) {
  return (
    <React.Fragment>
      {/* <!-- Register card started--> */}

      <div className="container">
        <div
          className="card mx-auto mt-5 shadow rounded "
          style={{ width: "35rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Register</h5>
            {/* <!-- Register form start--> */}
            <form
              className="needs-validation"
              autoComplete="off"
              onSubmit={props.handalSubmit}
            >
              <TextFildIndput
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="abc"
                aria-describedby="emailHelp"
                value={props.name}
                onChange={props.handalChange}
                lblText="User Name"
                infoText=""
                // error={error.email}
                required
              />
              {/* <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="abc"
                  value={props.name}
                  onChange={props.handalChange}
                  required
                />
              </div> */}
              <TextFildIndput
                type="email"
                name="email"
                className="form-control"
                id="userEmail"
                placeholder="abc@gmail.com"
                aria-describedby="emailHelp"
                value={props.email}
                onChange={props.handalChange}
                lblText=" Email address"
                infoText=" We'll never share your email with anyone else."
                // error={error.email}
                required
              />
              {/* <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="abc@gmail.com"
                  aria-describedby="emailHelp"
                  value={props.email}
                  onChange={props.handalChange}
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div> */}

              <TextFildIndput
                type="password"
                className="form-control"
                placeholder="******"
                name="password1"
                id="userPassword"
                value={props.password1}
                onChange={props.handalChange}
                lblText="Password"
                infoText="Passwod must greater then 6 character"
                // error={error.password}
                required
              />
              {/* <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="password1"
                  id="userPassword"
                  value={props.password1}
                  onChange={props.handalChange}
                  required
                />
                <div id="passwordHelp" className="form-text">
                  password must be at least 6 charset
                </div>
              </div> */}

              <TextFildIndput
                type="password"
                className="form-control"
                placeholder="******"
                name="password2"
                id="userPassword2"
                value={props.password2}
                onChange={props.handalChange}
                lblText=" Re-Enter Password"
                infoText=" password must match with above"
                // error={error.password}
                required
              />
              {/* <div className="mb-3">
                <label htmlFor="userPassword2" className="form-label">
                  {" "}
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  name="password2"
                  id="userPassword2"
                  value={props.password2}
                  onChange={props.handalChange}
                  required
                />
                <div id="passwordHelp2" className="form-text">
                  {" "}
                  <i className="fas fa-info text-primary"></i> password must
                  match with above
                </div>
              </div> */}

              <button
                type="submit"
                className="btn btn-warning w-100 shadow btn-sm "
              >
                Register
              </button>
            </form>
            {/* <!--Register form end-->

  <!-- OR seperator--> */}
            <hr className="hr-text" data-content="OR" />

            {/* <!-- Create account button--> */}
            <span className="text-center">
              Already you have account ?
              <Link to="/login">
                Singh In <i className="fas fa-caret-right"></i>
              </Link>
            </span>
            <a href="#" className="btn btn-outline-success mt-2 w-100">
              <i className="fab fa-google"></i> Sing in with Google
            </a>
            <a href="#" className="btn btn-outline-primary mt-2 w-100">
              <i className="fab fa-facebook-f"></i> Sing in with Facebook
            </a>
          </div>
        </div>
      </div>
      {/* <!--Register card end--> */}
    </React.Fragment>
  );
}

export default RegisterView;
