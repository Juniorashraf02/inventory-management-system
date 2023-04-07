const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { databaseConnect } = require("../utils/database.connect");


// Database
databaseConnect();

// server
const port = process.env.PORT || 7000;

// middleware
app.use(cors());
app.use(express.json());





app.get("/", (req, res) => {
  return res
    .status(201)
    .send("backend for inventory management system is running...!");
});

app.all("*", (req, res) => {
  return res.send("No route found");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`.bgMagenta);
});
