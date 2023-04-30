const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const visitorRoutes = require("./routes/visitorRoutes");
app.use("/api/visitors", visitorRoutes);

const PORT = process.env.PORT || 5004;

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to MongoDB")
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
