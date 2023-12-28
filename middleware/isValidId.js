const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next(HttpError(404, "Not found!"));
  }
  next();
};

module.exports = {
  isValidId,
};
