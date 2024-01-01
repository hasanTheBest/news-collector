exports.manabzamin = async function (page) {
  const leadArea = await page.waitForSelector("main");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    // grab first heading
    const articlesData = [];
    const selectors = [
      Array.from(
        leadArea.firstElementChild.firstElementChild.firstElementChild
          .children[1].children
      ),
      Array.from(
        document.querySelector("section img").parentElement.parentElement
          .children
      ),
    ];

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

    articlesData.push(
      getNews(
        leadArea.firstElementChild.firstElementChild.firstElementChild
          .firstElementChild
      )
    );

    selectors.forEach((seletor) =>
      articlesData.push(...seletor.map((node) => getNews(node)))
    );

    return articlesData;
  }, leadArea);

  return articles;
};
