module.exports = async function protidinersangbadCat(page) {
  try {
    await page.waitForSelector("#latest_contents_block");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector("h2")
          ? node.querySelector("h2").innerText.trim()
          : node.querySelector("h5").innerText.trim();
        const imgSrc = node.querySelector("img")?.src;

        const time = node.querySelector(".time")?.innerText.trim();
        const excerpt = node.querySelector("p")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      const newsBoxes = [
        document.querySelector(".col-lg-8.col "), //main lead
        ...Array.from(document.querySelectorAll(".News-List")),
        ...Array.from(document.querySelectorAll(".content_list")),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error(`protidinersangbadCat`, error);
  }
};
