const express = require("express");
const helmet = require("helmet");
const usersRouter = require("./users/users-router.js");
const { logger } = require("./middleware/middleware.js");

const server = express();
server.use(express.json());
server.use(helmet());

// global middleware and the user's router need to be connected here
server.use("/api/users", logger, usersRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
