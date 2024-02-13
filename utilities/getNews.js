const { ErrorResponse } = require("./ErrorResponse");
const { scrapingFunctions } = require("./scrapingFunctions");

exports.getNews = async function (name, page, newsCat) {
  try {
    const scrapeFunction = scrapingFunctions(newsCat)[name];

    if (!scrapeFunction) {
      ErrorResponse(
        `Scrapping function is not defined for the ${newsCat} of ${name}`,
        'You are requested to provide valid "news category" or "newspaper name"'
      );
    }
    return await scrapeFunction(page);
  } catch (error) {
    // ErrorResponse()
    // return { error: "Error occurred during scraping", message: error.message };
    // console.error("Error during scraping:", error);
    throw new Error(error);
  }
};
