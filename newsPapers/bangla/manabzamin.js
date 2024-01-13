const manabzaminCat = require("./manabzamin/manabzaminCat");
const manabzaminCatLeading = require("./manabzamin/manabzaminCatLeading");

exports.manabzamin = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await manabzaminCatLeading(page);
  }

  return await manabzaminCat(page);
};
