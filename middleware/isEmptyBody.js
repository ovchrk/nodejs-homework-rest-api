const { HttpError } = require("../helpers");

const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);

  if (!length) {
    return next(HttpError(400, "missing fields"));
  }
  next();
};

const isEmptyFavorite = (req, res, next) => {
  const { length } = Object.keys(req.body);

  if (!length) {
    return next(HttpError(400, "missing field favorite"));
  }
  next();
};

module.exports = {
  isEmptyBody,
  isEmptyFavorite,
};
