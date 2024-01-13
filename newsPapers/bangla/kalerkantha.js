const kalerkanthaCat = require("./kalerkantha/kalerkanthaCat");
const kalerkanthaCatLeading = require("./kalerkantha/kalerkanthaCatLeading");

exports.kalerkantha = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await kalerkanthaCatLeading(page);
  }

  return await kalerkanthaCat(page);
};
