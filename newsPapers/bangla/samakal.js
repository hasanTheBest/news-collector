const samakalCat = require("./samakal/samakalCat");
const samakalCatLeading = require("./samakal/samakalCatLeading");

exports.samakal = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await samakalCatLeading(page);
  }

  return await samakalCat(page);
};
