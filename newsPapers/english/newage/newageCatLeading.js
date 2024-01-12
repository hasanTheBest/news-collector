module.exports = async function newageCatLeading(page) {
  const leadContent = await page.waitForSelector(".contentPartOne");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    const articlesData = [];

    function getNews(node) {
      const title = node.querySelector("a").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
      };
    }

    articlesData.push(getNews(leadContent.querySelector(".homeSlide")));
    articlesData.push(
      ...Array.from(leadContent.querySelectorAll(".homeSlideNews ul li")).map(
        (node) => getNews(node)
      )
    );
    articlesData.push(
      ...Array.from(
        leadContent.querySelectorAll(".homeSlideNewsMid ul li:not(:last-child)")
      ).map((node) => getNews(node))
    );

    return articlesData;
  }, leadContent);

  return articles;
};
