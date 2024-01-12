exports.bangladeshTodayCat = async function ({ selector, page }) {
  const leadContent = await page.waitForSelector(selector);

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    // helper function
    function getNews(node) {
      const title = node.querySelector("h3").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p")
        ? node.querySelector("p").innerText.trim()
        : node.querySelector("h3")?.nextSibling.textContent.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const articlesData = Array.from(
      leadContent.querySelectorAll(".single-block")
    ).map((node) => getNews(node));

    return articlesData;
  }, leadContent);

  return articles;
};
