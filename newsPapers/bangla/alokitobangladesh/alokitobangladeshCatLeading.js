module.exports = async function alokitobangladeshCatLeading(page) {
  try {
    const leadContent = await page.waitForSelector(".lead-news");

    // Extract news articles
    const articles = await page.evaluate((leadContent) => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector("h1")
          ? node.querySelector("h1").innerText.trim()
          : node.querySelector("h2").innerText.trim();

        const imgSrc = node.querySelector("img")?.src;

        return {
          title,
          link,
          imgSrc,
        };
      }

      const newsBoxes = [
        leadContent.querySelector(".main-lead"),
        ...Array.from(leadContent.querySelectorAll(".sub-lead")),
        ...Array.from(leadContent.querySelectorAll(".box-style .col-sm-4")),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    }, leadContent);

    return articles;
  } catch (error) {
    console.error("Error in alokitobangladeshCatLeading", error);
  }
};
