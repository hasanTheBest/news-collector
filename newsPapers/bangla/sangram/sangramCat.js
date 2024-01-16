module.exports = async function sangramCat(page) {
  try {
    // Wait for the news articles to load
    const homeContent = await page.waitForSelector(".homeContent ul");

    // Extract news articles
    const articles = await page.evaluate((homeContent) => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector("a").innerText.trim();
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node
          .querySelector(".news-short-description")
          ?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
        };
      }

      const articlesData = Array.from(
        homeContent.querySelectorAll("ul li")
      ).map((node) => getNews(node));

      return articlesData;
    }, homeContent);

    return articles;
  } catch (error) {
    console.error("sangramCat", error);
  }
};
