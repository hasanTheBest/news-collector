exports.ErrorResponse = function (errorName, errorMessage) {
  return {
    type: "error",
    name: errorName,
    message: errorMessage,
  };
};
