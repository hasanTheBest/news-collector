const express = require("express");
const puppeteer = require("puppeteer");
const { getNews } = require("./utilities/getNews");

const app = express();

// Define middleware to parse incoming requests as JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("app is running smooth.");
});

// scraping here
app.get("/news", async (req, res) => {
  // try {
  // const { urls } = req.body; // Assuming URLs are sent in the request body
  const urls = [
    // english OKAY
    // "https://thebangladeshtoday.com/",
    // "https://www.tbsnews.net/",
    // "https://www.observerbd.com/",
    // "https://www.daily-sun.com/",
    // "https://www.dhakatribune.com/",
    // "https://www.newagebd.net/",
    // "https://newnation.live/",
    // "https://www.thedailystar.net/",

    // bangla
    "https://www.dainikamadershomoy.com/",
    // "https://www.bhorerkagoj.com/", // 2.  website reconstructing
    "https://bonikbarta.net/", 
    "https://dailyinqilab.com/", 
    "https://www.ittefaq.com.bd/",
    "https://www.jaijaidinbd.com/",
    "https://www.dailyjanakantha.com/",
    "https://www.jugantor.com/",
    "https://www.kalerkantho.com/",
    "https://mzamin.com/",
    "https://www.dailynayadiganta.com/",
    "https://www.prothomalo.com/",
    "https://samakal.com/",
    "https://sangbad.net.bd/",
  ];

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    headless: false,
  });

  const page = await browser.newPage();

  const scrapedData = [];

  for (const url of urls) {
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });

    const title = await page.title();
    const news = await getNews(url, page);

    scrapedData.push({ title, url, news });
  }

  await browser.close();

  res.status(200).json({
    message: "Scraping 'and saving to MongoDB' successful",
    data: scrapedData,
  });
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error", message: error });
  // }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 * app.post("/news", async (req, res) => {
  // try {
  // const { urls } = req.body; // Assuming URLs are sent in the request body
  const urls = [
    // "https://www.thedailystar.net/",
    "https://www.ittefaq.com.bd/",
    "https://www.dhakatribune.com/",
    // "https://www.dailynayadiganta.com/",
    "https://www.prothomalo.com/"
  ];

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    headless: false,
  });
  const page = await browser.newPage();

  const scrapedData = [];

  for (const url of urls) {
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    // Perform scraping logic here and push the scraped data to the array
    
    // Example:
    const title = await page.title()
    // const icon = await page.evaluate((page) => page.querySelector('link[rel="icon"]')?.href, page)
    const news = await getNews(url, page);
    scrapedData.push({ title, url, news });
  }

  await browser.close();

  res.status(200).json({
    message: "Scraping 'and saving to MongoDB' successful",
    data: scrapedData,
  });
  // } catch (error) {
  //   res.status(500).json({ error: "Internal Server Error", message: error });
  // }
});
 * */
