module.exports = async function manabzaminCat(page) {
  await page.waitForSelector(".flex-row-reverse");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("a").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const time = node.querySelector("p")?.innerText.trim();
      const excerpt = node.querySelector("span p")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        time,
        excerpt,
      };
    }

    const selectors = [
      document.querySelector(".col-sm-8.custom-border2.mb-5"),
      ...Array.from(document.querySelectorAll(".flex-sm-row.flex-row-reverse")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
