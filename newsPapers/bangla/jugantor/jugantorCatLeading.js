module.exports = async function jugantorCatLeading(page){
  // Wait for the news articles to load
  const leadArea = await page.waitForSelector("#lead-news");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
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

    const selectors = [
      document.querySelector("#lead-news #desktop-cat-lead"),
      ...Array.from(
        leadArea.firstElementChild.firstElementChild.lastElementChild
          .firstElementChild.children
      ),
      ...Array.from(document.querySelector("#show-news").children),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
}