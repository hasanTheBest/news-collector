module.exports = async function jaijaidinCat(page){
  try {
    // Wait for the news articles to load
  await page.waitForSelector(".common-lead-content");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h5").innerText.trim();
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
      ...Array.from(document.querySelectorAll('.common-lead-content')),
      ...Array.from(
        document.querySelectorAll('.sub-news')
      ),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
  } catch (error) {
    console.error(`jaijaidinCat`, error)
  }
}