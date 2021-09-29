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

router.post("/", validateUser, (req, res, next) => {
  Users.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.put("/:id", validateUserId, validateUser, (req, res, next) => {
  Users.update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.delete("/:id", validateUserId, async (req, res, next) => {
  const deletedUser = await Users.getById(req.params.id);
  Users.remove(req.params.id).then(res.status(200).json(deletedUser)).catch(next);
});

router.get("/:id/posts", validateUserId, (req, res, next) => {
  // RETURN THE ARRAY OF USER POSTS
});

router.post("/:id/posts", validateUserId, (req, res, next) => {
  // RETURN THE NEWLY CREATED USER POST
  // and another middleware to check that the request body is valid
});

module.exports = router;
