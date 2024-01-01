exports.nayaDiganta = async function (page) {
  // Wait for the news articles to load
  await page.waitForSelector(".news-box");

  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h2").innerText.trim();

      return {
        title,
        link,
      };
    }

    const selectors = [
      document.querySelector(".news-caption-lead"),
      ...Array.from(
        document.querySelectorAll(".news-box .col-md-9 .col-md-8 .news-caption")
      ),
      ...Array.from(document.querySelectorAll(".lead-news-row .news-item")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
