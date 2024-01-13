const thedailystarCat = require("./thedailystar/thedailystarCat");
const thedailystarCatLeading = require("./thedailystar/thedailystarCatLeading");

exports.thedailystar = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await thedailystarCatLeading(page);
  }

  return await thedailystarCat(page);
};
