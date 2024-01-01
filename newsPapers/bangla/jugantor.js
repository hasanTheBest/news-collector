exports.jugantor = async function (page) {
  // Navigate to Prothom Alo's website
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  // Wait for the news articles to load
  const leadArea = await page.waitForSelector("#lead-news");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    const articlesData = [];
    const selectors = [
      Array.from(
        leadArea.firstElementChild.firstElementChild.lastElementChild
          .firstElementChild.children
      ),
      Array.from(document.querySelector("#show-news").children),
    ];

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h2")
        ? node.querySelector("h2").innerText.trim()
        : node.querySelector("figcaption").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    articlesData.push(
      getNews(document.querySelector("#lead-news #desktop-cat-lead"))
    );

    selectors.forEach((selector) =>
      articlesData.push(...selector.map((node) => getNews(node)))
    );

    return articlesData;
  }, leadArea);

  return articles;
};
