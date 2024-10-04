// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScroolToTop";
import Main from "./Screens/LandingPage/Main";

const WhatsAppRedirect = () => {
  useEffect(() => {
    window.location.href =
      "https://wa.me/919384392655?text=Hi%20Althaf%2C%20I%20came%20across%20your%20profile%20on%20LinkedIn%20and%20I%27m%20interested%20in%20creating%20an%20online%20platform%20for%20my%20business.%20Let%27s%20discuss%20how%20we%20can%20make%20this%20happen!";
  }, []);

  return null; // This component doesn't render anything visible
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/whatsapp" element={<WhatsAppRedirect />} />
      </Routes>
    </Router>
  );
};

export default App;
