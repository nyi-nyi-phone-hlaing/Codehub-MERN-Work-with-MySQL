const db = require("../utils/database");

module.exports = class Post {
  constructor(title, description, image_url) {
    this.title = title;
    this.description = description;
    this.image_url = image_url;
  }

  static find() {
    return db.execute("SELECT * FROM posts");
  }

  static findById(id) {
    return db.execute("SELECT * FROM posts WHERE posts.id = ?", [id]);
  }

  create() {
    return db.execute(
      "INSERT INTO posts (title, description, image_url) VALUES (?,?,?)",
      [this.title, this.description, this.image_url]
    );
  }
};
