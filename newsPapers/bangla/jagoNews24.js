const jagoNews24Cat = require("./jagoNews24/jagoNews24Cat");
const jagoNews24CatLeading = require("./jagoNews24/jagoNews24CatLeading");

module.exports = async function jagonews24(page, newsCat) {
  if (newsCat === "leading") {
    return await jagoNews24CatLeading(page);
  }
  return await jagoNews24Cat(page);
};

/**--------- Error ---------------
 * Attention Required! | Cloudflare
 *------------------------------- */
