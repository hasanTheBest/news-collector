const banglaNews24Cat = require("./banglaNews24/banglaNews24Cat");
const banglaNews24CatLeading = require("./banglaNews24/banglaNews24CatLeading");

module.exports = async function banglaNews24(page, newsCat) {
  return await banglaNews24Cat(page, newsCat);
};
