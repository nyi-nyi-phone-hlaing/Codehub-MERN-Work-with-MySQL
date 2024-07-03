// Core Modules
const path = require("path");

// Package installer
const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

// Import local
const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");
const sequelize = require("./utils/database");

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

sequelize
  .sync()
  .then(() => {
    console.log(`Server running on port ${port}`);
    console.log("MySQL is connected!");
    app.listen(port);
  })
  .catch((err) => console.log(err));
