exports.kalbela = async function (page) {
  const leadArea = await page.waitForSelector("#leadSection");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".title").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".summery")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const selectors = [
      leadArea.querySelector(".lead_heaight"),
      ...Array.from(leadArea.querySelectorAll(".sub-news .col-lg-4")),
      ...Array.from(leadArea.querySelectorAll(".selected-news > div")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
