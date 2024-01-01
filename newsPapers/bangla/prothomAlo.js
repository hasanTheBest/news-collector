exports.prothomAlo = async function (page) {
  await page.waitForSelector(".qn-x0");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".headline-title").textContent.trim();

      const excerpt = node.querySelector("p.excerpt")?.textContent.trim();
      const time = node.querySelector("time")?.textContent.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        excerpt,
        link,
        time,
        imgSrc,
      };
    }

    const selectors = [
      document.querySelector(".qn-x0 .BXtd8"),
      ...Array.from(document.querySelectorAll(".qn-x0 .DnfWn")),
      ...Array.from(document.querySelectorAll(".aGkwG .left_image_right_news")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
