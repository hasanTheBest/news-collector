const { default: puppeteer } = require("puppeteer");
// const { newspaperUrls: urls } = require("../dummyData/urls");
const { getNews } = require("../utilities/getNews");
const { newspaperConfig } = require("../utilities/newspaperConfig");

const newspaperNames = Object.keys(newspaperConfig);

// News categories
// const newsCat = "leading";
const newsCat = "international";
// const newsCat = "national";
// const newsCat = "business";
// const newsCat = "politics";
// const newsCat = "entertainment";
// const newsCat = "sports";
// const newsCat = "feature";
// const newsCat = "countryside";
// const newsCat = "crime";
// const newsCat = "education";
// const newsCat = "lifestyle";
// const newsCat = "tech";
// const newsCat = "health";
// const newsCat = "opinion";
// const newsCat = "job";
// const newsCat = "religion";
// const newsCat = "campus";
// const newsCat = "literature";

exports.newsRoute = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      headless: "new",
      // headless: false,
    });

    const page = await browser.newPage();

    const scrapedData = [],
      errorData = [];

    for (const name of newspaperNames) {
      // Log the current active scrapping url
      const url = newspaperConfig[name][newsCat];
      console.log("\nActive\t", name + ": " + url);

      try {
        if (!url) {
          throw new Error(`Url is not defined for ${newsCat} of ${name}`);
        }

        await page.goto(url, {
          waitUntil: "domcontentloaded",
        });

        const title = await page.title();
        const news = await getNews(name, page, newsCat);

        scrapedData.push({ title, url, news });
      } catch (error) {
        errorData.push({ url, error: error.message });
        console.error(`Error: ${name}`, error);
      }
    }

    await browser.close();

    res.status(200).json({
      message: "Scraping 'and saving to MongoDB' successful",
      data: scrapedData,
      error: errorData,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", message: error });
  }
};
