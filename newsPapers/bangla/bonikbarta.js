exports.bonikbarta = async function (page) {
  await page.waitForSelector("body");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h4").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    const articlesData = Array.from(
      document.querySelector(".lead_exclusive").parentElement.children
    ).map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
