// config.js
module.exports = {
  banglaNews: {
    prothomAlo: "https://www.prothomalo.com/",
    amarBarta: "https://www.amarbarta.com/",
    // Add other Bangla news URLs here
  },
  englishNews: {
    theDailyStar: "https://www.thedailystar.net/",
    newAgeBD: "https://www.newagebd.net/",
    // Add other English news URLs here
  },
  // Add categories for each website if necessary
};

// scrapingFunctions.js
module.exports = {
  async prothomAlo(page) {
    // Scraping logic for Prothom Alo
  },
  async theDailyStar(page) {
    // Scraping logic for The Daily Star
  },
  // Define other scraping functions accordingly
};

// newsScraper.js
const config = require("./config");
const scrapingFunctions = require("./scrapingFunctions");

exports.getNews = async function (url, page, category) {
  try {
    // Check if the URL exists in config and retrieve the respective scraping function
    const website = url in config.banglaNews ? "banglaNews" : "englishNews";
    const scrapeFunction = scrapingFunctions[url];

    if (!scrapeFunction) {
      throw new Error("Scraping function not found for the given URL");
    }

    await page.goto(url);

    // Call the respective scraping function based on the URL
    return await scrapeFunction(page);
  } catch (error) {
    console.error("Error during scraping:", error);
    return { error: "Error occurred during scraping" };
  }
};
