const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  employeeName: String,
  vehicleNumber: String,
  employeeDesignation: String,
  mobileNumber: String,
  email: String,
  startupName: String,
  dateOfVisit: Date,
  purposeOfVisit: String,
});

module.exports = mongoose.model("Visitor", visitorSchema);
