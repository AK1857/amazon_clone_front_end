import React from "react";
//import NavbarContainer from "./navbar/NavbarContainer";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "../homePageProduct/HomePageProductContainer";
//import Footer from "./Footer";
//import LoginContainer from "../login/LoginContainer";

function LandingPage() {
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
