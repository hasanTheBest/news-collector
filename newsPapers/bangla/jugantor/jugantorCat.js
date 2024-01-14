module.exports = async function jugantorCat(page) {
  // Wait for the news articles to load
  await page.waitForSelector(".top_lead_card");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("a").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    const subLeadNews = [];
    Array.from(document.querySelectorAll("#show-news.d-xl-block")).forEach(
      (section) =>
        subLeadNews.push(...Array.from(section.firstElementChild.children))
    );

    const selectors = [
      ...Array.from(
        document.querySelectorAll(".top_lead_card:not(.d-xl-none)")
      ),
      ...subLeadNews,
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
