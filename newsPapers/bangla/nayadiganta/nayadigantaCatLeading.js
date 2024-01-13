module.exports = async function nayadigantaCatLeading(page) {
  // Wait for the news articles to load
  const newsBox = await page.waitForSelector(".news-box");

  const articles = await page.evaluate((newsBox) => {
    function getNews(node) {
      let title;

      if (node.querySelector("h2"))
        title = node.querySelector("h2").innerText.trim();
      else if (node.querySelector("h3"))
        title = node.querySelector("h3").innerText.trim();
      else
        title = node
          .querySelector(".column-no-left-padding > a")
          .innerText.trim();

      const link = node.querySelector("a").href;
      return {
        title,
        link,
      };
    }

    const selectors = [
      newsBox.querySelector(".news-caption-lead"),
      ...Array.from(
        newsBox.querySelectorAll(".col-md-9 .col-md-8 .news-caption")
      ),
      ...Array.from(document.querySelectorAll(".lead-news-row .news-item")),
      ...Array.from(
        newsBox.querySelectorAll(".col-md-9 .col-md-4 .sub-lead-list")
      ),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, newsBox);

  return articles;
};
