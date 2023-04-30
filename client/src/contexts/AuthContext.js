import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  const logIn = (role) => {
    setUserRole(role);
  };

  const logOut = () => {
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ userRole, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
