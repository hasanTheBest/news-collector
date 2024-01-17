module.exports = async function theFinancialExpressCat(page) {
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
        document.querySelector("#category section"),
        ...Array.from(document.querySelectorAll("article")),
      ];

      const articlesData = newsBox.map((news) => news && getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("theFinancialExpressCatLeading", error);
  }
};
