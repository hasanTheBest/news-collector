module.exports = async function amadershomoyCat(page) {
  try {
    await page.waitForSelector(".tc-post-grid-default");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector(".lead-title")
          ? node.querySelector(".lead-title").innerText.trim()
          : node.querySelector(".title").innerText.trim();
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector(".clamp-lines-3")?.innerText.trim();
        const time = node.querySelector(".meta-bot")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      const selectors = [
        ...Array.from(document.querySelectorAll(".tc-post-grid-default")),
        ...Array.from(document.querySelectorAll(".item.py-2")), // starter div with all child div
      ];

      const articlesData = selectors.map((node) => getNews(node));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("Error in amadershomoyCat:", error);
    // throw error; // add error handling logic here
  }
};
