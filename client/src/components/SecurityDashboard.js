import React from "react";
import { useVisitorContext } from "../contexts/VisitorContext";

const SecurityDashboard = () => {
  const { visitorData } = useVisitorContext();

  return (
    <div>
      <h1>Security Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason for Visit</th>
          </tr>
        </thead>
        <tbody>
          {visitorData.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecurityDashboard;
