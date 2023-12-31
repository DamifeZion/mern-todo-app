require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.setHeader(
    "Access-control-Allow-Credentials", "true"
  );
  res.send("API is running...");
});

//Import Route
const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");

//Routing
app.use("/api/user", userRoute);
app.use("/api/todo", todoRoute);

//Connect to DB
const Port = process.env.PORT || 6000;
const uri = process.env.MONGO_URI;
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, mongooseOptions)
  .then(() => {
    app.listen(
      Port,
      console.log(`Connect to MongoDB. Server is live on Port: ${Port}`)
    );
  })
  .catch((err) => {
    if (err) throw err;
  });
