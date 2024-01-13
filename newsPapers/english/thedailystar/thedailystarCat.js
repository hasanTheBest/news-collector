module.exports = async function thedailystarCat(page) {
  await page.waitForSelector(".pane-category-news");

  // Extract news articles
  const articles = await page.evaluate(() => {
    // grab first heading
    const articlesData = [];

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".title").innerText.trim();
      const imgSrc = node.querySelector("img")?.srcset;
      const excerpt = node.querySelector(".intro")?.innerText.trim();
      const time = node.querySelector(".interval")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time,
      };
    }

    articlesData.push(
      ...Array.from(document.querySelectorAll(".pane-category-news .card")).map(
        (node) => getNews(node)
      ),
      ...Array.from(
        document.querySelectorAll(".pane-category-load-more .card")
      ).map((node) => getNews(node))
    );

    return articlesData;
  });
  return articles;
};
