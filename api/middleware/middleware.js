const User = require("../users/users-model");

function logger(req, res, next) {
  console.log(`Method:  ${req.method} \nURL:  ${req.originalUrl} \nTime:  ${new Date()}\n`);
  next();
}

async function validateUserId(req, res, next) {
  try {
    const existingUser = await User.getById(req.params.id);
    if (existingUser) {
      req.user = existingUser;
      next();
    } else {
      next({ status: 404, message: "user not found" });
    }
  } catch (error) {
    next(error);
  }
}

function validateUser(req, res, next) {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    next({ status: 400, message: "missing required name field" });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  const { text } = req.body;
  if (!text || typeof text !== "string") {
    next({ status: 400, message: "missing required text field" });
  } else {
    next();
  }
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
