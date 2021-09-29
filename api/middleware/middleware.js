const User = require("../users/users-model");

function logger(req, res, next) {
  console.log(`Method:  ${req.method} \nURL:  ${req.url} \nTime:  ${new Date()}`);
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
  // DO YOUR MAGIC
  // const { name } = req.body;
  // if (!name || typeof name !== "string") {
  //   next({ status: 422, message: "name is required" });
  // } else {
  //   next();
  // }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
};
