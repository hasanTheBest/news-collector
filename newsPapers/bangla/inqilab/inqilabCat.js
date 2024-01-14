module.exports = async function inqilabCat(page) {
  try {
    await page.waitForSelector(".row.d-flex.flex-row");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const link = node.querySelector("a").href;
        const title = node.querySelector("h4")
          ? node.querySelector("h4").innerText.trim()
          : node.querySelector(".content-heading").innerText.trim();

        const excerpt = node
          .querySelector("p.d-none.d-md-block")
          ?.innerText.trim();
        const time = node.querySelector(".news-date-time")?.innerText.trim();
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
        document.querySelector(".row.d-flex.flex-row"),
        ...Array.from(document.querySelectorAll(".row.mt-5 > .col-md-6")),
      ];

      const articlesData = selectors.map((node) => getNews(node));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("Error in inqilabCat:", error);
    // throw error; // add error handling logic here
  }
};
