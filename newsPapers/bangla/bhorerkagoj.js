exports.bhorerkagoj = async function (page) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".padan-news");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    const articlesData = [];
    const selectors = [
      Array.from(leadArea.querySelectorAll(".podan-small .podan-small-item")),
    ];

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h2")
        ? node.querySelector("h2").innerText.trim()
        : node.querySelector("h4").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      // const excerpt = node.querySelector(".intro")?.innerText.trim();

      // const time = node.querySelector(".PublishTime")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        // excerpt,
        // time,
      };
    }

    articlesData.push(getNews(leadArea.querySelector(".padan-news-big")));

    selectors.forEach((selector) =>
      articlesData.push(...selector.map((node) => getNews(node)))
    );

    return articlesData;
  }, leadArea);

  return articles;
};
