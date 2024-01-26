const bbcBangla = require("../newsPapers/bangla/bbcBangla");
const scrapeNews = require("./scrapeNews");

exports.getAllEvents = async (req, res, next) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Send an initial message
  // res.write(`data: ${JSON.stringify({ message: "Connected to SSE" })}\n\n`);

  const names = ["tbsNews", "prothomAlo", "bbcBangla"];
  const newsCat = "leading";

  for (const name of names) {
    try {
      const news = await scrapeNews(name, newsCat);
      // res.write(`data: ${JSON.stringify({ message: news })}`);
      res.write(`data: ${JSON.stringify(news)}\n\n`);
      // res.write(`data: ${JSON.stringify(news)}`);
    } catch (error) {
      console.error("event source error", error);
      res.end();
    }
  }

  /* let count = 0;
  const intervalId = setInterval(() => {
    // res.write(`data: ${JSON.stringify({ message: `Update ${count++}` })}\n\n`);
    res.write(`data: ${JSON.stringify({ count: count++ })}\n\n`);

    // Simulate periodic updates
    if (count === 5) {
      clearInterval(intervalId);
      res.end();
    }
  }, 1000); */

  // Close the SSE connection when the client disconnects
  req.on("close", () => {
    // clearInterval(intervalId);
    res.end();
  });

  res.end();
};
