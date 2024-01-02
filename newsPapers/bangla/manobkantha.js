exports.manobkantha = async function (page) {
  const leadArea = await page.waitForSelector(".container .row.mt-1 .col-md-9");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h2")
        ? node.querySelector("h2").innerText.trim()
        : node.querySelector("li a").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p")?.innerText.trim();
      const time = node.querySelector("time")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time,
      };
    }

    const selectors = [
      leadArea.querySelector(".col-md-8 article"),
      ...Array.from(leadArea.querySelectorAll(".sub-card li")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
