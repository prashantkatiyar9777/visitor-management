import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    vehicleNumber: "",
    employeeDesignation: "",
    mobileNumber: "",
    email: "",
    startupName: "",
    dateOfVisit: new Date(),
    purposeOfVisit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfVisit: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/visitors", formData);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeName"
        placeholder="Employee Name"
        value={formData.employeeName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="vehicleNumber"
        placeholder="Vehicle Number"
        value={formData.vehicleNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="employeeDesignation"
        placeholder="Employee Designation"
        value={formData.employeeDesignation}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleChange}
        required
        pattern="^\d{10}$"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <input
        type="text"
        name="startupName"
        placeholder="Startup Name"
        value={formData.startupName}
        onChange={handleChange}
        required
      />
      <DatePicker selected={formData.dateOfVisit} onChange={handleDateChange} />
      <input
        type="text"
        name="purposeOfVisit"
        placeholder="Purpose of Visit"
        value={formData.purposeOfVisit}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VisitorForm;
