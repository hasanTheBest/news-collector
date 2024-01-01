exports.nayaDiganta = async function (page) {
  // Wait for the news articles to load
  await page.waitForSelector(".news-box");

  const articles = await page.evaluate(() => {
    const articlesData = [];
    const selectors = [];

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h2").innerText.trim();

      return {
        title,
        link,
      };
    }

    articlesData.push(getNews(document.querySelector(".news-caption-lead")));

    selectors.push(
      document.querySelectorAll(".news-box .col-md-9 .col-md-8 .news-caption"),
      document.querySelectorAll(".lead-news-row .news-item")
    );

    selectors.forEach((selector) => {
      const news = Array.from(selector).map((node) => getNews(node));
      articlesData.push(news);
    });

    return articlesData;
  });

  return articles;
};
