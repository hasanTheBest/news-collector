// Website reconstructing

exports.bhorerkagoj = async function (page) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".padan-news");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h2")
        ? node.querySelector("h2").innerText.trim()
        : node.querySelector("h4").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    const selectors = [
      leadArea.querySelector(".padan-news-big"),
      ...Array.from(
        leadArea.querySelectorAll(".podan-small .podan-small-item")
      ),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
