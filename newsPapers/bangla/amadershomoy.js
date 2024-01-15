const amadershomoyCat = require("./amadershomoy/amadershomoyCat");
const amadershomoyCatLeading = require("./amadershomoy/amadershomoyCatLeading");

exports.amadershomoy = async function (page, newsCat) {
  if (newsCat === "leading") {
    return await amadershomoyCatLeading(page);
  }

  return await amadershomoyCat(page);
};
