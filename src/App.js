import React from "react";
import LandingPage from "./components/layout/LandingPage";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import LoginContainer from "./components/login/LoginContainer";

function App() {
  return (
    <div>
      <div>
        <NavbarContainer />
        {/* <LandingPage /> */}
        <LoginContainer />
      </div>
    </div>
  );
}

export default App;
