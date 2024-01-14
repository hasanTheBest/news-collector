const janakanthaCat = require("./janakantha/janakanthaCat");
const janakanthaCatLeading = require("./janakantha/janakanthaCatLeading");

exports.janakantha = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await janakanthaCatLeading(page);
  }

  return await janakanthaCat(page);
};
