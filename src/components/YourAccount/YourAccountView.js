import React from "react";

function YourAccountView() {
  return (
    <div>
      {/* <!--Your Accout panal start--> */}
      <div className="container mt-5">
        <h2>Your account</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="your_order.html" className="btn w-100">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-2x fa-shopping-bag"></i> Your Order
                  </h5>
                  <div>
                    <span className="text-muted"> Tack Teturn Buy Agian..</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="change_password.html" className="btn w-100">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-2x fa-key"></i> Change Password
                  </h5>
                  <div>
                    <span className="text-muted"> Tack Teturn Buy Agian..</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="your_address.html" className="btn w-100">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-2x fa-map-marker-alt"></i>Your Address
                  </h5>
                  <div>
                    <span className="text-muted">
                      {" "}
                      Edit Address for delever
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* <!-- Acccount panet end-->
    <!--Your Accout panal start--> */}

        <div className="row">
          <div className="col-md-4">
            <a href="seller_account_intro.html" className="btn w-100">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-2x fa-universal-access"></i> Seller
                    Account
                  </h5>
                  <div>
                    <span className="text-muted"> Tack Teturn Buy Agian..</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/#" className="btn w-100">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-2x fa-key"></i> Change Password
                  </h5>
                  <div>
                    <span className="text-muted"> Tack Teturn Buy Agian..</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/#" className="btn w-100">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-2x fa-map-marker-alt"></i>Your Address
                  </h5>
                  <div>
                    <span className="text-muted">
                      {" "}
                      Edit Address for delever
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Acccount panet end--> */}
    </div>
  );
}

export default YourAccountView;
