import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const VisitorContext = createContext();

export const useVisitorContext = () => {
  const context = useContext(VisitorContext);
  if (!context) {
    throw new Error("useVisitorContext must be used within a VisitorProvider");
  }
  return {
    visitorData: context.visitorData,
    addVisitor: context.addVisitor,
    deleteVisitorById: context.deleteVisitorById,
  };
};

export const VisitorProvider = ({ children }) => {
  const [visitorData, setVisitorData] = useState([]);

  const addVisitor = (visitor) => {
    setVisitorData([...visitorData, visitor]);
  };

  const deleteVisitorById = (id) => {
    setVisitorData(visitorData.filter((visitor) => visitor.id !== id));
  };

  const fetchVisitors = async () => {
    try {
      const response = await axios.get("/api/visitors");
      setVisitorData(response.data);
    } catch (error) {
      console.error("Error fetching visitors:", error);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <VisitorContext.Provider
      value={{ visitorData, addVisitor, deleteVisitorById }}
    >
      {children}
    </VisitorContext.Provider>
  );
};
