exports.samakal = async function (page) {
  // Wait for the news articles to load
  const DTopNewsSection = await page.waitForSelector(".DTopNewsSection");

  // Extract news articles
  const articles = await page.evaluate((DTopNewsSection) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h3")
        ? node.querySelector("h3").innerText.trim()
        : node.querySelector("h1").innerText.trim();

      const excerpt = node.querySelector("p")?.innerText.trim();
      const time = node.querySelector(".PublishTime")?.innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        excerpt,
        time,
        imgSrc,
      };
    }

    const selectors = [
      DTopNewsSection.querySelector(".DHomeTopLead"),
      ...Array.from(DTopNewsSection.querySelectorAll(".DHomeLeadList3")),
      ...Array.from(DTopNewsSection.querySelectorAll(".leadTop3-wrap")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, DTopNewsSection);

  return articles;
};
