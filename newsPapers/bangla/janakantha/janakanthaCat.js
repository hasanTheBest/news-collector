module.exports = async function janakanthaCat(page) {
  // Wait for the news articles to load
  await page.waitForSelector(".DCatNewsList3");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".Title").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".Brief p")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const selectors = [
      document.querySelector(".DCatTopNews"),
      ...Array.from(document.querySelectorAll(".DCatTopNewsList")),
      ...Array.from(document.querySelectorAll(".DCatNewsList3")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
