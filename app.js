// Core Modules
const path = require("path");

// Package installer
const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

// Import local
const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");

// Initializing
const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.use("/admin", (req, res, next) => {
  next();
});

// Routes defined middleware
app.use(postRoutes);
app.use("/admin", adminRoutes);

// Server listen
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port 8080`);
});
