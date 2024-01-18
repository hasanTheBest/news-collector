module.exports = async function bangladeshPratidinCat(page) {
  // Wait for the news articles to load
  await page.waitForSelector(".cat-lead");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link =
        node.tagName === "A" ? node.href : node.querySelector("a").href;

      const title =
        node.tagName === "A"
          ? node.innerText.trim()
          : node.querySelector("a").innerText.trim();

      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("a + p") ? node.querySelector("a + p").innerText.trim() : node.querySelector("strong + p")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const articlesData = [
      getNews(document.querySelector(".cat-lead")),
      ...Array.from(document.querySelectorAll(".cat-2nd-lead")).map((node) =>
        getNews(node)
      ),
      ...Array.from(document.querySelectorAll(".list-item")).map((node) =>
        getNews(node)
      ),
    ];

    return articlesData;
  });

  return articles;
};
