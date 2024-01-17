module.exports = async function ittefaqCatLeading(page) {
  try {
    const leadContent = await page.waitForSelector(".wrapper.special_30_70");

    // Extract news articles
    const articles = await page.evaluate((leadContent) => {
      function getNews(node) {
        const title = node.querySelector(".title").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector(".summery")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
        };
      }

      const newsBoxes = [
        ...Array.from(leadContent.querySelectorAll(".each")),
        ...Array.from(
          document.querySelector(".p_d.brash").querySelectorAll(".col4")
        ),
        ...Array.from(
          document.querySelector(".hide_this_mobile").querySelectorAll(".col3")
        ),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    }, leadContent);

    return articles;
  } catch (error) {
    console.error("Error in ittefaqCat:", error);
    // throw error; // add error handling logic here
  }
};
