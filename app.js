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
const Post = require("./models/post");
const User = require("./models/user");

// Initializing
const app = express();

// Middleware
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

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

Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Post);
sequelize
  .sync()
  .then(() => {
    console.log(`Server running on port ${port}`);
    console.log("MySQL is connected!");
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "webWizard",
        email: "wizard083040@gmail.com",
      });
    }
    return user;
  })
  .then((_) => {
    console.log(_.dataValues.name);
    app.listen(port);
  })
  .catch((err) => console.log(err));
