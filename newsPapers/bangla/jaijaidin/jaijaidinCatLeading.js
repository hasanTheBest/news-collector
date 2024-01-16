module.exports = async function jaijaidinCatLeading(page){
  try {
    // Wait for the news articles to load
  const leadArea = await page.waitForSelector(".lead-content");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".title").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".summery")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const selectors = [
      leadArea,
      ...Array.from(leadArea.nextElementSibling.children),
      ...Array.from(
        document.querySelectorAll(
          "._container-fluid + div.row .common-lead-content"
        )
      ),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
  } catch (error) {
    console.error(`jaijaidinCatLeading`, error)
  }
}