const janakanthaCatLeading = require("./janakantha/janakanthaCatLeading");
const jugantorCat = require("./jugantor/jugantorCat");

exports.jugantor = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await janakanthaCatLeading(page);
  }

  return await jugantorCat(page);
};
