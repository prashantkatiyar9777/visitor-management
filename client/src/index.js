import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { VisitorProvider } from "./contexts/VisitorContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <VisitorProvider>
      <App />
    </VisitorProvider>
  </AuthProvider>
);
