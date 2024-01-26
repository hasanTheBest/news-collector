const scrapeNews = require("../services/scrapeNews");

exports.getAllNews = async (req, res, next) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const { newspaperNames, newsCat } = req.query;

  for (const name of newspaperNames.split(",")) {
    try {
      const news = await scrapeNews(name, newsCat);
      res.write(`data: ${JSON.stringify(news)}\n\n`);
    } catch (error) {
      console.error("event source error", error);
      res.end();
    }
  }

  // Close the SSE connection when the client disconnects
  req.on("close", () => {
    res.end();
  });

  // when scrapping is completed
  res.end();
};
