const dhakaTribuneNewsCat = require("./dhakaTribune/dhakaTribuneNewsCat");
const dhakaTribuneNewsCatLeading = require("./dhakaTribune/dhakaTribuneNewsCatLeading.");

exports.dhakaTribune = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await dhakaTribuneNewsCatLeading(page);
  }

  return await dhakaTribuneNewsCat(page);
};
