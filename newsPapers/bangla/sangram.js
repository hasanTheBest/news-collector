exports.sangram = async function (page) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".topContent");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("a").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".news-short-description")?.innerText.trim();
      const time = node.querySelector(".dateTime")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time
      };
    }

    const selectors = [
      leadArea.querySelector(".topContent .frsLead"),
      ...Array.from(leadArea.querySelectorAll(".topContent li")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
