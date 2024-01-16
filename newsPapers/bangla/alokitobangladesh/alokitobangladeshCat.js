module.exports = async function alokitobangladeshCat(page) {
  try {
    const leadContent = await page.waitForSelector("#latest_contents_block");

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
        leadContent.querySelector(".lead_content"),
        ...Array.from(leadContent.querySelectorAll(".content_list")),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    }, leadContent);

    return articles;
  } catch (error) {
    console.error("Error in alokitobangladeshCat", error);
  }
};
