import React from "react";

function LoginView(props) {
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
          <form
            className="needs-validation"
            id="needs-validation"
            autoComplete="off"
            onSubmit={props.handalSubmit}
          >
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
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
              <div className="invalid-feedback">
                <i className="fas fa-exclamation-triangle text-danger"></i>{" "}
                Inter Valid Email
              </div>
              <div className="valid-feedback">
                <i className="far fa-thumbs-up text-sccess"></i>Good
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="******"
                name="password"
                id="userPassword"
                value={props.password}
                onChange={props.handalChange}
                required
              />
              <div id="passwordHelp" className="form-text">
                {" "}
                <i className="fas fa-info text-primary"></i> password must be at
                least 6 charset
              </div>
              <div className="invalid-feedback">
                <i className="fas fa-exclamation-triangle text-danger"></i>{" "}
                Password mus be 6 character
              </div>
              <div className="valid-feedback">
                <i className="far fa-thumbs-up text-sccess"></i> Good
              </div>
            </div>
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
          <a href="register.html" className="btn btn-dark mt-2 w-100">
            {" "}
            Create your Amazon Account{" "}
          </a>
          <a href="#" className="btn btn-outline-success mt-2 w-100">
            <i className="fab fa-google"></i> Sing in with Google
          </a>
          <a href="#" className="btn btn-outline-primary mt-2 w-100">
            <i className="fab fa-facebook-f"></i> Sing in with Facebook
          </a>
        </div>
      </div>
    </div>

    // login card end here
  );
}

export default LoginView;
