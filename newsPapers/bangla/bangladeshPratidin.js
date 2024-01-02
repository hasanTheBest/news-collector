exports.bangladeshPratidin = async function (page) {
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".mainContainer");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;

      let title;
      if (node.querySelector("h5"))
        title = node.querySelector("h5").innerText.trim();
      else if (node.querySelector("li.bi-caret-right-fill a"))
        title = node.querySelector("li.bi-caret-right-fill a").innerText.trim();
      else title = node.querySelector("li strong").innerText.trim();

      const imgSrc = node.querySelector("img")?.src;
      const time = node.querySelector("li span")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        time,
      };
    }

    const selectors = [
      ...Array.from(
        leadArea.querySelectorAll(".mainContainer .lead-slider .carousel-item")
      ),
      ...Array.from(leadArea.querySelectorAll(".mainContainer .lead-2nd li")),
      ...Array.from(
        leadArea.querySelectorAll(".mainContainer .latest-news-top li")
      ).slice(0, 10), // only first 10 items
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
