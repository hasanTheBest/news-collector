const { ErrorResponse } = require("../../../utilities/ErrorResponse");

module.exports = async function jagoNews24Cat(page) {
  try {
    await page.waitForSelector(".single-block");

    // Extract news articles
    const articles = await page.evaluate(() => {
      // helper function
      function getNews(node) {
        const title = node.querySelector("h3")
          ? node.querySelector("h3").innerText.trim()
          : node.querySelector("h4").innerText.trim();
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

      const selectors = [
        document.querySelector(".thumb-first"),
        ...Array.from(document.querySelectorAll(".small-thumb")),
        ...Array.from(document.querySelectorAll(".single-block")),
      ];

      const articlesData = selectors.map((node) => node && getNews(node));

      return articlesData;
    });

    return articles;
  } catch (error) {
    throw new Error(`jagoNews24 page is not loaded correctly.` + error.message);
    // console.error("\njagoNews24Cat\t:", error);
  }
};
