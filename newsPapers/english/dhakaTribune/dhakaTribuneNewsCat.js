module.exports = async function dhakaTribuneNewsCat(page, newspaper) {
  await page.waitForSelector(".content_type_news");

  // Extract news articles
  const articles = await page.evaluate((newspaper) => {
    function getNews(node) {
      const title = node.querySelector(".title").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".summery")?.innerText.trim();
      const time = node.querySelector(".time")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time,
      };
    }

    let selectors = Array.from(
      document.querySelectorAll(".each.content_type_news")
    );

    if (newspaper === "banglaTribune") {
      selectors = selectors.splice(0, 10);
    }

    const articlesData = selectors.map((news) => getNews(news));

    return articlesData;
  }, newspaper);

  return articles;
};
