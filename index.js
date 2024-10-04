import React from "react";
import ReactDOM from "react-dom/client";
import "./src/index.css";
import App from "./src/App";
import reportWebVitals from "./src/reportWebVitals";
// import "./firebaseConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
