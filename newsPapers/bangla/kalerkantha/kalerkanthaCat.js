module.exports = async function kalerkanthaCat(page) {
  await page.waitForSelector(".categoryLead");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link =
        node.tagName === "A" ? node.href : node.querySelector("a").href;
      const title = node.querySelector("h4").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p.card-text")?.innerText.trim();
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
      ...Array.from(document.querySelectorAll(".categoryLead .card")),
      ...Array.from(document.querySelectorAll("a.row.mb-4")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
