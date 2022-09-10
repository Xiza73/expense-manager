import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import { Layout } from "./layout/Layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </React.StrictMode>
);
