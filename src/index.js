import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRatig from "./StarRating";

import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRatig color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <StarRatig maxRating={5} />
    <StarRatig
      maxRating={5}
      color="red"
      messages={["Terrible", "bad", "okay", "good", "perfect"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
