exports.songbad = async function (page) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".lead-section");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("a").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const selectors = [
      leadArea.querySelector(".lead-top"),
      ...Array.from(leadArea.querySelectorAll(".lead-bottom dd")),
      ...Array.from(leadArea.querySelectorAll(".side-box dd")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
