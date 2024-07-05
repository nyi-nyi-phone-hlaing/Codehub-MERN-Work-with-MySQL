//? Post Array
const { where } = require("sequelize");
const Post = require("../models/post");

//? Homepage Rendring
exports.renderHomePage = (req, res) => {
  Post.findAll({ order: [["createdAt", "DESC"]] })
    .then((rows) => {
      res.render("home", { title: "Home Page", postsArray: rows });
    })
    .catch((err) => console.log(err));
};

//? PostPage Rendring
exports.renderPostPage = (req, res) => {
  res.render("post", { title: "Post Page" });
};

//? AddPost Page Rendring
exports.renderAddPostPage = (req, res) => {
  res.render("create-post", { title: "Post Create" });
};

//? Create post controller
exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  req.user
    .createPost({ title, description, image_url: photo })
    .then((_) => {
      console.log("Post Create Successfully!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderPostDetailPage = (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((row) => {
      res.render("details", { title: row.title, post: row });
    })
    .catch((err) => console.log(err));
};

exports.deletePost = (req, res) => {
  const { id } = req.params;

  Post.findByPk(id)
    .then((post) => {
      if (!post) {
        console.log("Post not found");
        return null;
      }
      return post.destroy();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.renderEditPage = (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((post) => {
      res.render("edit-post", { title: post.title, post });
    })
    .catch((err) => console.log(err));
};

exports.editPost = (req, res) => {
  const { id, title, description, photo } = req.body;
  Post.findByPk(id)
    .then((post) => {
      if (!post) {
        console.log("Post not found");
        return null;
      }
      post.title = title;
      post.description = description;
      post.image_url = photo;
      return post.save();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
