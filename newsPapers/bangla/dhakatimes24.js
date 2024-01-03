exports.dhakatimes24 = async function (page) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".block_one");

  const articles = await page.evaluate((leadArea) => {
    // helper function for extract news
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h1").innerText.trim();

      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    const selectors = [
      leadArea.querySelector(".lead_one"),
      ...Array.from(document.querySelectorAll(".block_two")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
