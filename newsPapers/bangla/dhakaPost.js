const dhakaPostCat = require("./dhakaPost/dhakaPostCat");

module.exports = async function dhakaPost(page, newsCat) {
  return await dhakaPostCat(page, newsCat);
};
