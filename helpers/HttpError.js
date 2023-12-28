const HttpError = (status, message) => {
  console.log(`log inside error`);
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { HttpError };
