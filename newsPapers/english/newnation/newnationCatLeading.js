module.exports = async function newnationCatLeading(page) {
  const leadContent = await page.waitForSelector(".tipi-flex-wrap");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    const articlesData = [];

    function getNews(node) {
      const title = node.querySelector("h3").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    articlesData.push(
      ...Array.from(leadContent.querySelectorAll("article")).map((node) =>
        getNews(node)
      )
    );

    return articlesData;
  }, leadContent);

  return articles;
};
