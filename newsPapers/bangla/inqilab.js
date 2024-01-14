const inqilabCat = require("./inqilab/inqilabCat");
const inqilabCatLeading = require("./inqilab/inqilabCatLeading");

exports.inqilab = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await inqilabCatLeading(page);
  }

  return await inqilabCat(page);
};
