require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Import Route
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");

// Routing for API endpoints
app.use("/api/user", userRoute);
app.use("/api/todo", todoRoute);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  // Serve index.html for any unknown routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// Connect to DB
const Port = process.env.PORT || 6000;
const uri = process.env.MONGO_URI;
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, mongooseOptions)
  .then(() => {
    app.listen(Port, () => {
      console.log(`Connected to MongoDB. Server is live on Port: ${Port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });