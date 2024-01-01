exports.janakantha = async function (url) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".TopHomeSection");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    const articlesData = [];
    const selectors = [
      Array.from(leadArea.querySelector(".DLeadSide").children),
      Array.from(leadArea.querySelector(".DTop2").firstElementChild.children),
      Array.from(document.querySelector(".DTop4").children),
    ];

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h1")
        ? node.querySelector("h1").innerText.trim()
        : node.querySelector("h2").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    articlesData.push(getNews(leadArea.querySelector(".DLeadNews")));

    selectors.forEach((seletor) =>
      articlesData.push(...seletor.map((node) => getNews(node)))
    );

    return articlesData;
  }, leadArea);

  return articles;
};
