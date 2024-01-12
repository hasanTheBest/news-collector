module.exports = async function dhakaTribuneNewsCat(page) {
  const container = await page.waitForSelector(".pagemaker");

  // Extract news articles
  const articles = await page.evaluate((container) => {
    function getNews(node) {
      const title = node.querySelector(".title").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".summery")?.innerText.trim();
      const time = node.querySelector(".time")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time,
      };
    }

    const articlesData = Array.from(
      container.querySelectorAll(".each.content_type_news")
    ).map((news) => getNews(news));

    return articlesData;
  }, container);

  return articles;
};
