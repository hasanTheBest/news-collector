const protidinersangbadCat = require("./protidinersangbad/protidinersangbadCat");
const protidinersangbadCatLeading = require("./protidinersangbad/protidinersangbadCatLeading");

exports.protidinersangbad = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await protidinersangbadCatLeading(page);
  }
  return await protidinersangbadCat(page);
};
