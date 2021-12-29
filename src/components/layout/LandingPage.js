import React from "react";
import NavbarContainer from "./navbar/NavbarContainer";
import ImageSlider from "./ImageSlider";
import HomePageProductContainer from "../homePageProduct/HomePageProductContainer";

function LandingPage() {
  return (
    <React.Fragment>
      <NavbarContainer />

      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
