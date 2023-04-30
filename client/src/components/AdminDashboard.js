import React from "react";
import { useVisitorContext } from "../contexts/VisitorContext";

const AdminDashboard = () => {
  const { visitorData, deleteVisitorById } = useVisitorContext(); // Add deleteVisitorById

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason for Visit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visitorData.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.name}</td>
              <td>{visitor.reason}</td>
              <td>
                <button onClick={() => deleteVisitorById(visitor.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
