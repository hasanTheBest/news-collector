exports.dailyObserver = async function (page) {
   
  const leadContent = await page.waitForSelector("#slider1_container");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    function getNews(node) {
      const title = node.querySelector(".slider_font")
        ? node.querySelector(".slider_font").innerText.trim()
        : node.querySelector(".title_inner").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc
      };
    }

    const newsBoxes = [
      ...Array.from(
        leadContent.querySelector("div[u='navigator']").previousElementSibling
          .children
      ).slice(1),
      ...Array.from(
        leadContent.parentElement.parentElement.querySelectorAll(
          "div.boxNews[style='margin-bottom: 20px; padding: 0 0 0 0']"
        )
      ),
      ...Array.from(
        leadContent.parentElement.parentElement.previousElementSibling.querySelectorAll(
          ".boxNews"
        )
      ),
    ];

    const articlesData = newsBoxes.map((news) => getNews(news));

    return articlesData;
  }, leadContent);

  return articles;
};
