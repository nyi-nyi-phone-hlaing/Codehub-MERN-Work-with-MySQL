const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT("medium"),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT("long"),
    allowNull: false,
  },
  image_url: {
    type: Sequelize.TEXT("medium"),
    allowNull: false,
  },
});

module.exports = Post;
