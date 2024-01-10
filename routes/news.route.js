const { default: puppeteer } = require("puppeteer");
const { newspaperUrls: urls } = require("../dummyData/urls");
const { getNews } = require("../utilities/getNews");

exports.newsRoute = async (req, res) => {
  try {
    // url which are sent from client
    // const { urls } = req.query;

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

    // for text of array sent from client
    // for (const url of urls.split(",")) {
    for (const url of urls) {
      // Log the current active scrapping url
      console.error("active scrapping url", url);

      try {
        await page.goto(url, {
          waitUntil: "domcontentloaded",
        });

        const title = await page.title();
        const news = await getNews(url, page);

        scrapedData.push({ title, url, news });
      } catch (error) {
        errorData.push({ url, error: error.message });
        console.error(`Error scraping URL: ${url}`, error);
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
