const newageCat = require("./newage/newageCat");
const newageCatLeading = require("./newage/newageCatLeading");

exports.newage = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await newageCatLeading(page);
  }
  return await newageCat(page, newsCat);
};
