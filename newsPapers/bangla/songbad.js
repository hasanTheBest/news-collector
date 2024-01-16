const songbadCat = require("./songbad/songbadCat");
const songbadCatLeading = require("./songbad/songbadCatLeading");

exports.songbad = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await songbadCatLeading(page);
  }
  return await songbadCat(page, newsCat);
};
