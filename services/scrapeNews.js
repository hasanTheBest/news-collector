const { default: puppeteer } = require("puppeteer");
const { getNews } = require("../utilities/getNews");
const { newspaperConfig } = require("../utilities/newspaperConfig");

async function scrapeNews(name, newsCat) {
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

    const url = newspaperConfig[name][newsCat];
    console.log("\nActive\t", name + ": " + url);

    if (!url) {
      throw new Error(`Url is not defined for ${newsCat} of ${name}`);
    }

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    const title = await page.title();
    const news = await getNews(name, page, newsCat);

    await browser.close();
    return { title, url, news };
  } catch (error) {
    throw new Error(`Scrapping Error for ${name} of ${newsCat}: ${error}`);
  }
}

module.exports = scrapeNews;
