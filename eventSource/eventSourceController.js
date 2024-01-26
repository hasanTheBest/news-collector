exports.getAllEvents = async (req, res, next) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let count = 0;

  const intervalId = setInterval(() => {
    res.write(`data: ${JSON.stringify({ message: `Update ${count++}` })}\n\n`);

    // Simulate periodic updates
    if (count === 5) {
      clearInterval(intervalId);
      res.end();
    }
  }, 1000);

  // Send an initial message
  res.write(`data: ${JSON.stringify({ message: "Connected to SSE" })}\n\n`);

  // Close the SSE connection when the client disconnects
  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
};
