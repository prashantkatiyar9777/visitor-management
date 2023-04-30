import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AuthContext from "./AuthContext";
import AdminDashboard from "./components/AdminDashboard";
import SecurityDashboard from "./components/SecurityDashboard";
import VisitorForm from "./components/VisitorForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/security"
          element={
            <ProtectedRoute role="security">
              <SecurityDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/visitor-form" element={<VisitorForm />} />
      </Routes>
    </Router>
  );
}

export default App;
