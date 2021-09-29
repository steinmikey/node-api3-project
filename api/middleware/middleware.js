function logger(req, res, next) {
  console.log(`Method:  ${req.method} \nURL:  ${req.url} \nTime:  ${new Date()}`);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
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
