const express = require("express");
const { validateUserId, validateUser, validatePost } = require("../middleware/middleware");
const Users = require("./users-model");
const Posts = require("../posts/posts-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Users.get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.get("/:id", validateUserId, (req, res, next) => {
  Users.getById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.post("/", validateUser, (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put("/:id", validateUserId, (req, res, next) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // and another middleware to check that the request body is valid
});

router.delete("/:id", validateUserId, (req, res, next) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
});

router.get("/:id/posts", validateUserId, (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
});

router.post("/:id/posts", validateUserId, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // and another middleware to check that the request body is valid
});

module.exports = router;
