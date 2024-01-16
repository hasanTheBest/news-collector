module.exports = async function songbadCat(page, newsCat) {
  const selector = newsCat === "opinion" ? ".opinion-contents" : ".auto-news";
  try {
    // Wait for the news articles to load
    const container = await page.waitForSelector(selector);

    // Extract news articles
    const articles = await page.evaluate((container) => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector("a").innerText.trim();
        const imgSrc = node.querySelector("img")?.src;
        const time = node.querySelector(".datetime")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          time,
        };
      }

      const articlesData = Array.from(container.querySelectorAll("dd")).map(
        (node) => getNews(node)
      );

      return articlesData;
    }, container);

    return articles;
  } catch (error) {
    console.error(" Error in songbadCat", error);
  }
};
