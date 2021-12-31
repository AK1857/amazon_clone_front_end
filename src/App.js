import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import LandingPage from "./components/layout/LandingPage";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import LoginContainer from "./components/login/LoginContainer";
import Footer from "./components/layout/Footer";
import RegisterContainer from "./components/register/RegisterContainer";

function App() {
  const Landing = () => {
    return <LandingPage />;
  };
  const Login = () => {
    return <LoginContainer />;
  };

  return (
    <Router>
      <div>
        <NavbarContainer />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginContainer />} />
          <Route exact path="/register" element={<RegisterContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
