const newnationCat = require("./newnation/newnationCat");
const newnationCatLeading = require("./newnation/newnationCatLeading");

exports.newnation = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await newnationCatLeading(page);
  }

  return await newnationCat(page);
};
