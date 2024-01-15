const amadershomoyCat = require("./amadersomoy/amadershomoyCat");
const amadershomoyCatLeading = require("./amadersomoy/amadershomoyCatLeading");

exports.amadersomoy = async function (page, newsCat) {
  try {
    if (newsCat === "leading") {
      return await amadershomoyCatLeading(page);
    }

    return await amadershomoyCat(page);
  } catch (error) {
    console.error("Error in amadersomoy", error);
  }
};
