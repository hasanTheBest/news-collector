module.exports = async function newnationCat(page) {
  const leadContent = await page.waitForSelector("#contents-wrap");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    function getNews(node) {
      const title = node.querySelector(".title").innerText.trim();
      const link = node.querySelector("a").href;

      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".excerpt")?.innerText.trim();
      const time = node.querySelector("time.entry-date")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time,
      };
    }

    const articlesData = Array.from(
      leadContent.querySelectorAll("article.type-post")
    ).map((node) => getNews(node));

    return articlesData;
  }, leadContent);

  return articles;
};
