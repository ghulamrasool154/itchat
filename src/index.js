import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./content/RedcuerFun";

const root = createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>
);

reportWebVitals();
