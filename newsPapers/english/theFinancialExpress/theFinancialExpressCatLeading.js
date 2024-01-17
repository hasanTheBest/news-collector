module.exports = async function theFinancialExpressCatLeading(page) {
  try {
    await page.waitForSelector("article");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector("h3").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector("p")?.innerText.trim();
        const time = node.querySelector(".divide-x-2")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      const newsBox = [
        ...Array.from(
          document
            .querySelector(".main-slider-container")
            .querySelectorAll(".slick-slide")
        ).splice(0, 4),
        ...Array.from(document.querySelectorAll("article")).splice(0, 16),
      ];

      const articlesData = newsBox.map((news) => getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("theFinancialExpressCatLeading", error);
  }
};
