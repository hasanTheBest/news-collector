const nayadigantaCat = require("./nayadiganta/nayadigantaCat");
const nayadigantaCatLeading = require("./nayadiganta/nayadigantaCatLeading");

exports.nayaDiganta = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await nayadigantaCatLeading(page);
  }

  return await nayadigantaCat(page);
};
