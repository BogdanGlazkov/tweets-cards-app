import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./components/Loader/Loader";
import "./helpers/i18n";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
