// const { HttpError } = require("../helpers");

// const validateBody = (schema) => {
//   const func = (req, res, next) => {
//     const error = schema.validate(req.body);
//     if (error) {
//       return next(HttpError(400, "Validation error!!!!"));
//     }

//     next();
//   };
//   return func;
// };

// module.exports = {
//   validateBody,
// };
const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");

      return next(HttpError(400, `Validation error: ${errorMessage}`));
    }

    next();
  };
  return func;
};

module.exports = {
  validateBody,
};
