exports.dailyObserverCat = async function (selector, page) {
  const newsContainer = await page.waitForSelector(selector);

  // Extract news articles
  const articles = await page.evaluate((newsContainer) => {
    function getNews(node) {
      const title = node.querySelector(".title_inner").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("img")?.nextSibling.textContent.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const articlesData = Array.from(
      newsContainer.querySelectorAll(".inner")
    ).map((news) => getNews(news));

    return articlesData;
  }, newsContainer);

  return articles;
};
