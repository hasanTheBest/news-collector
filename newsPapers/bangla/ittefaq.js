const ittefaqCat = require("./ittefaq/ittefaqCat");
const ittefaqCatLeading = require("./ittefaq/ittefaqCatLeading");

exports.ittefaq = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await ittefaqCatLeading(page);
  }

  return await ittefaqCat(page);
};
