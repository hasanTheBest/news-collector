const bangladeshPratidinCat = require("./bangladeshPratidin/bangladeshPratidinCat");
const bangladeshPratidinCatLeading = require("./bangladeshPratidin/bangladeshPratidinCatLeading");

exports.bangladeshPratidin = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await bangladeshPratidinCatLeading(page);
  }

  return await bangladeshPratidinCat(page);
};
