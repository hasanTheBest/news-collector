const { default: puppeteer } = require("puppeteer");
const { getNews } = require("../utilities/getNews");
const { newspaperConfig } = require("../utilities/newspaperConfig");
const { ErrorResponse } = require("../utilities/ErrorResponse");

async function scrapeNews(name, newsCat) {
  try {
    const browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
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
      // throw new Error(`Url is not defined for ${newsCat} of ${name}`);
      return ErrorResponse(
        `Url is not defined for ${newsCat} of ${name}`,
        "The requested url is not valid."
      );
    }

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    const title = await page.title();
    const news = await getNews(name, page, newsCat);

    await browser.close();
    // return { title, url, news };
    return {
      type: "success",
      url,
      news,
    };
  } catch (error) {
    // throw new Error(`: ${error}`);
    return ErrorResponse(
      `Scrapping Error for ${name} of ${newsCat}`,
      error.message
    );
  }
}

module.exports = scrapeNews;
