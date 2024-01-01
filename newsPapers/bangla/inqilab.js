exports.inqilab = async function (page) {
  const leadArea = await page.waitForSelector(".special-top");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    const articlesData = [];

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h3")
        ? node.querySelector("h3").innerText.trim()
        : node.querySelector("a p").innerText.trim();

      const excerpt = node.querySelector("p")?.innerText.trim();
      const time = node.querySelector("span")?.innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        excerpt,
        time,
        imgSrc,
      };
    }

    articlesData.push(getNews(leadArea.firstElementChild));

    articlesData.push(
      ...Array.from(leadArea.children[1].children).map((node) => getNews(node))
    );

    return articlesData;
  }, leadArea);

  return articles;
};
