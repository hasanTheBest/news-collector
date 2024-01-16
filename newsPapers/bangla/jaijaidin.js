const jaijaidinCat = require("./jaijaidin/jaijaidinCat");
const jaijaidinCatLeading = require("./jaijaidin/jaijaidinCatLeading");

exports.jaijaidin = async function (page, newsCat) {
  if(newsCat === "leading"){
    return await jaijaidinCatLeading(page)
  }

  return await jaijaidinCat(page)
};
