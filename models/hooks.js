const handleSaveErr = (error, data, next) => {
  error.status = 400;
  next();
};

const addUpdateSettings = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};

module.exports = { handleSaveErr, addUpdateSettings };
