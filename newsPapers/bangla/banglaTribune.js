const dhakaTribuneNewsCat = require("../english/dhakaTribune/dhakaTribuneNewsCat");
const dhakaTribuneNewsCatLeading = require("../english/dhakaTribune/dhakaTribuneNewsCatLeading.");
const banglaTribuneCat = require("./banglaTribune/banglaTribuneCat");
const banglaTribuneCatLeading = require("./banglaTribune/banglaTribuneCatLeading");

module.exports = async function banglaTribune(page, newsCat) {
  if (newsCat === "leading") {
    // layout is same
    return await dhakaTribuneNewsCat(page, "banglaTribune");
  }
  // layout is same
  return await dhakaTribuneNewsCat(page);
};
