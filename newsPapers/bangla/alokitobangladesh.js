const alokitobangladeshCat = require("./alokitobangladesh/alokitobangladeshCat");
const alokitobangladeshCatLeading = require("./alokitobangladesh/alokitobangladeshCatLeading");

exports.alokitobangladesh = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await alokitobangladeshCatLeading(page);
  }
  return await alokitobangladeshCat(page);
};
