import React from "react";

function ImageSlider() {
  return (
    <React.Fragment>
      {/* <!-- Slider start--> */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/img/slider/slider3.jpg"
              className="d-block w-100"
              alt="img1"
            />
          </div>
          <div className="carousel-item">
            <a href="#">
              {" "}
              <img
                src="assets/img/slider/slider2.jpg"
                className="d-block w-100"
                alt="img2"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="#">
              <img
                src="assets/img/slider/slider3.jpg"
                className="d-block w-100"
                alt="img3"
              />
            </a>
          </div>

          <div className="carousel-item">
            <a href="#">
              {" "}
              <img
                src="assets/img/slider/slider4.jpg"
                className="d-block w-100"
                alt="img3"
              />
            </a>
          </div>

          <div className="carousel-item">
            <a href="#">
              {" "}
              <img
                src="assets/img/slider/slider5.jpg"
                className="d-block w-100"
                alt="img3"
              />
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      {/* <!-- Slider end--> */}
    </React.Fragment>
  );
}

export default ImageSlider;
