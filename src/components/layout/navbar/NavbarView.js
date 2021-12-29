import React from "react";

function NavbarView() {
  return (
    <React.Fragment>
      {/* <!-- navbar start--> */}
      <nav id="pageTop" className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <div className="container-fluid"> */}
        {/* <!--drawer button--> */}
        <button
          className="btn btn-outline-light"
          data-toggle="drawer"
          data-target="#amazeon_drawer"
        >
          <i className="fas fa-2x fa-sliders-h"></i>
        </button>

        {/* <!-- drawer start--> */}

        <div
          className="drawer drawer-left slide"
          tabindex="-1"
          role="dialog"
          aria-labelledby="drawer-1-title"
          aria-hidden="true"
          id="amazeon_drawer"
        >
          <div
            className="drawer-content drawer-content-scrollable"
            role="document"
          >
            <div className="drawer-header bg-dark text-white">
              <h4 className="drawer-title mx-auto" id="drawer-1-title">
                <i className="fas fa-user-circle"></i>
                Hello,Sing In
              </h4>
            </div>
            <div className="drawer-body">
              <h6 className="text-muted text-uppercase"> Help & Setting</h6>
              <a href="#" className="btn btn-outline-success sm">
                {" "}
                Your Account
              </a>
              <a href="login.html" className="btn btn-outline-warning my-2">
                {" "}
                Sing in
              </a>
            </div>
            <div className="drawer-footer">
              <button
                type="button"
                className="btn btn-danger   btn-block"
                data-dismiss="drawer"
                aria-label="Close"
              >
                <i className="far fa-2x fa-window-close"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <!--drawer ends--> */}
        <a className="navbar-brand px-2" href="#">
          <img
            src="./assets/img/logo5.png"
            height="30"
            width="100"
            alt="amazon"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse px-2"
          id="navbarSupportedContent"
        >
          {/* <!--Search bar start--> */}
          <form action="" className="form-inline ">
            <div className="input-group">
              <div className="input-group-prepand">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary  dropdown-toggle "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All
                  </button>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Electronics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kitchen hardware
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Books
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mens ware
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kids ware
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <input
                type="text"
                name="query"
                id="query"
                className="form-control"
                size="50"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-warning btn-sm">
                  <i className="fas fa-2x fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          {/* <!--Search bar end--> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <!-- Start select language--> */}
            <li className="nav-item dropdown px-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="prefareLanguageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-2x fa-language"></i>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="prefareLanguageDropdown"
              >
                <form action="" className="p-2">
                  <div className="dropdown-divider"></div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="prefarLanguage"
                      id="englishLanguage"
                      value="english"
                    />
                    <img
                      src="./assets/img/flage/englishflage.png"
                      alt="english"
                      width="50"
                      height="30"
                    />
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="prefarLanguage"
                      id="hindiLanguage"
                      value="hindi"
                    />
                    <img
                      src="./assets/img/flage/hindiflage.png"
                      alt="english"
                      width="50"
                      height="30"
                    />
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="prefarLanguage"
                      id="urduLanguage"
                      value="urdu"
                    />
                    <img
                      src="./assets/img/flage/urduflage.jpg"
                      alt="english"
                      width="50"
                      height="30"
                    />
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="prefarLanguage"
                      id="banglaLanguage"
                      value="bangla"
                    />
                    <img
                      src="./img/flage/banglaflage.png"
                      alt="english"
                      width="50"
                      height="30"
                    />
                  </div>
                  <div className="dropdown-divider"></div>
                </form>
              </div>
            </li>
            {/* <!-- End select language drodown-->

          <!-- user loging dropdown--> */}
            <li className="nav-item dropdown px-2">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userAccount"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-2x fa-user-circle "></i>
              </a>
              <div className="dropdown-menu p-2" aria-labelledby="userAccount">
                <div className="d-flex row justify-content-center">
                  <a
                    href="#"
                    className="btn btn-warning btn-sm font-weight-bold  w-75"
                  >
                    Sing in
                  </a>
                  <small>
                    {" "}
                    New Customer ?{" "}
                    <a href="#" className="text-info">
                      Start here
                    </a>
                  </small>
                </div>
              </div>
            </li>
            {/* <!-- end user loging dropdown-->

          <!-- shoping card start--> */}
            <li className="nav-item px-2">
              <a className="nav-link ">
                <i className="fas fa-2x fa-shopping-cart text-white"></i>
                <span className="badge bg-warning rounded-pill">7</span>
              </a>
            </li>
            {/* <!-- shoping card end--> */}
          </ul>
        </div>
        {/* </div>   */}
      </nav>
      {/* <!--navbar end--> */}
    </React.Fragment>
  );
}

export default NavbarView;
