import React from "react";
import ReactDOM from "react-dom/client";
import StarRatig from "./StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRatig maxRating={5} />
    <StarRatig maxRating={10} />
    <StarRatig />
  </React.StrictMode>
);
