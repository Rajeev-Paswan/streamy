import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import { MovieData } from "./components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieData>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MovieData>
);
