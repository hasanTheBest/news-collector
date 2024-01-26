const { default: puppeteer } = require("puppeteer");

// const { newspaperUrls: urls } = require("../dummyData/urls");
const { getNews } = require("../utilities/getNews");
const { newspaperConfig } = require("../utilities/newspaperConfig");

// const newspaperNames = [
//   // "dailyInqilab",
//   // 'theDailyStar',
//   "dhakaTribune",
//   "tbsNews",
// ];

// News categories
// const newsCat = "leading";
// const newsCat = "international";
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
// const newsCat = "video";
// const newsCat = "environment";
// const newsCat = "stock";
// const newsCat = "trade";

// Get all tours
exports.getAllNews = async (req, res, next) => {
  // Middleware to set up SSE headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  // next();

  // An asynchronous function to initiate scraping sequentially
  // async function scrapeSequentially() {
  //   const results = [];

  const { newspaperNames, newsCat } = req.query;

  for (const name of newspaperNames.split(",")) {
    try {
      // Scraping each news URL one by one
      const newsData = await scrapeNews(name, newsCat);

      // Push the result to the array
      // results.push(newsData);
      res.write(JSON.stringify(newsData, null, 2));

      // You can emit the result here or handle it as needed
      // console.log("Scraping result for", url, ":", newsData);
    } catch (error) {
      // Handle errors for each individual task
      console.error("Error scraping", name, ":", error.message);
    }
  }

  // Return the final results array
  // return results;
  // }

  // // Call the function and handle the results
  // scrapeSequentially();

  // Send an initial message
  res.write(`data: ${JSON.stringify({ message: "Connected to SSE" })}\n\n`);

  // Close the SSE connection when the client disconnects
  // req.on("close", () => {
  //   res.end();
  // });
  // Close the SSE connection when all tasks are done
  res.end();

  /*
  const scrapePromise = newspaperNames.reduce((promiseChain, name) => {
    return promiseChain.then(async () => {
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

        await page.goto(url);

        const title = await page.title();

        await browser.close();

        res.status(200).json({
          status: "successful",
          title: title,
        });
      } catch (error) {
        res.status(400).json({
          status: "fail",
          message: "Unable to find data",
          error: error.message,
        });
      }
    });
  }, Promise.resolve());
  */

  /*
  const promiseArr = newspaperNames.map(async (name) => {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      // headless: "new",
      headless: false,
    });

    const page = await browser.newPage();

    const url = newspaperConfig[name][newsCat];

    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    await browser.close();

    return page;
  });

  Promise.allSettled(promiseArr).then((pRes) =>
    pRes.forEach((res2) =>
      res.status(200).json({
        data: res2,
      })
    )
  );
  */

  /*
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

      // Grab data from client request- names and category of news
    // const {newspaperNames, newsCat} = req.query;
    

    

    await browser.close();

    res.status(200).json({
      status: "successful",
      data: scrapedData,
      error: errorData,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Unable to find data",
      error: error.message,
    });
  }
 */
};

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
    throw new Error(`Error for ${name} of ${newsCat}`);
  }
}
