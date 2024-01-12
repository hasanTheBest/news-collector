exports.businessStandardCat = async function (selector, page) {
  const catContainer = await page.waitForSelector(selector);

  // Extract news articles
  const articles = await page.evaluate((catContainer) => {
    // helper function for extracting news
    function getNews(node) {
      const title = node.querySelector(".card-title").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p.card-intro")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const articlesData = Array.from(catContainer.querySelectorAll(".card")).map(
      (news) => getNews(news)
    );

    return articlesData;
  }, catContainer);

  return articles;
};
