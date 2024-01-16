const sangramCat = require("./sangram/sangramCat");
const sangramCatLeading = require("./sangram/sangramCatLeading");

exports.sangram = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await sangramCatLeading(page);
  }
  return await sangramCat(page);
};
