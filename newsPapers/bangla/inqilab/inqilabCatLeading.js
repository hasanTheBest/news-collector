module.exports = async function inqilabCatLeading(page) {
  try {
    await page.waitForSelector(".special-top");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector("h3")
          ? node.querySelector("h3").innerText.trim()
          : node.querySelector("a p").innerText.trim();

        const excerpt = node.querySelector("p")?.innerText.trim();
        const time = node.querySelector("span")?.innerText.trim();
        const imgSrc = node.querySelector("img")?.src;

        return {
          title,
          link,
          excerpt,
          time,
          imgSrc,
        };
      }

      const selectors = [
        leadArea.firstElementChild,
        ...Array.from(leadArea.children[1].children),
      ];

      const articlesData = selectors.map((node) => getNews(node));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("Error in ittefaqCat:", error);
    // throw error; // add error handling logic here
  }
};
