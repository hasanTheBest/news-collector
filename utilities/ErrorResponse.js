exports.ErrorResponse = function (errorName, errorMessage, url) {
  return {
    type: "error",
    name: errorName,
    message: errorMessage,
    url,
  };
};
