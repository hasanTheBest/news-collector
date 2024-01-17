module.exports = async function theFinancialExpressCatLifestyle(page) {
  try {
    await page.waitForSelector("article");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector("h3").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector("p")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
        };
      }

      const newsBox = [
        document.querySelector("#category section section"),
        ...Array.from(document.querySelectorAll(".col-span-1")).splice(1, 4),
        ...Array.from(document.querySelectorAll("article")),
      ];

      const articlesData = newsBox.map((news) => getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("theFinancialExpressCatLifestyle", error);
  }
};
