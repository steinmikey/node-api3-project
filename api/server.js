const express = require("express");
const helmet = require("helmet");
const usersRouter = require("./users/users-router.js");
const { logger } = require("./middleware/middleware.js");

const server = express();
server.use(express.json());
server.use(helmet());

server.use("/api/users", logger, usersRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("*", (req, res, next) => {
  next({ status: 404, message: `${req.method} ${req.originalUrl} not found` });
});

server.use(errorHandling);

module.exports = server;

function errorHandling(err, req, res, _next) {
  res.status(err.status || 500).json({
    message: err.message
  });
}
