const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../models/User");

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(HttpError(401, `Not authorized`));
  }

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    return next(HttpError(401, `Not authorized`));
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token) {
      return next(HttpError(401, `Not authorized`));
    }
    req.user = user;
    next();
  } catch (err) {
    next(HttpError(401, `${err.message}`));
  }
};
module.exports = { authenticate };
