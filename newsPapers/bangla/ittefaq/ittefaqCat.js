module.exports = async function ittefaqCat(page) {
  try {
    await page.waitForSelector(".content_type_news");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector(".title").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector(".summery")?.innerText.trim();
        const time = node.querySelector(".time")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      const articlesData = Array.from(
        document.querySelectorAll(".content_type_news")
      ).map((news) => getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("Error in ittefaqCat:", error);
    // throw error; // add error handling logic here
  }
};
