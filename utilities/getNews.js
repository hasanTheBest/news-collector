const { scrapingFunctions } = require("./scrapingFunctions");

exports.getNews = async function (name, page, newsCat) {
  try {
    const scrapeFunction = scrapingFunctions(newsCat)[name];

    if (!scrapeFunction) {
      throw new Error("Scraping function not found for the given URL");
    }
    return await scrapeFunction(page);
  } catch (error) {
    return { error: "Error occurred during scraping", message: error.message };
    // console.error("Error during scraping:", error);
  }
};