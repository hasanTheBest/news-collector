const prothomAloCat = require("./prothomAlo/prothomAloCat");
const prothomAloCatLeading = require("./prothomAlo/prothomAloCatLeading");

exports.prothomAlo = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await prothomAloCatLeading(page);
  }

  return await prothomAloCat(page);
};
