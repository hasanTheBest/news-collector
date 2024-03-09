const { ErrorResponse } = require("./ErrorResponse");
const { scrapingFunctions } = require("./scrapingFunctions");

exports.getNews = async function (name, page, newsCat) {
  try {
    const scrapeFunction = scrapingFunctions(newsCat)[name];

    if (!scrapeFunction) {
      throw new Error(
        `Scrapping function is not defined for the ${newsCat} of ${name}`
      );
    }
    return await scrapeFunction(page);
  } catch (error) {
    // ErrorResponse()
    // return { error: "Error occurred during scraping", message: error.message };
    // console.error("Error during scraping:", error);
    // return ErrorResponse(
    //   `Error during scraping of "${name}" for category of "${newsCat}"`,
    //   error
    // );

    throw new Error("getNews: " + error.message);
  }
};
