module.exports = async function jagoNews24CatLeading(page) {
  try {
    await page.waitForSelector(".main-lead-box");

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
        document.querySelector(".main-lead-box"),
        document.querySelector(".lead-sidebar-box"),
        ...Array.from(document.querySelectorAll(".lead-mid-rbox")),
        ...Array.from(document.querySelectorAll(".lead-b-mid-rbox")),
      ];

      const articlesData = selectors.map((node) => node && getNews(node));

      return articlesData;
    });

    return articles;
  } catch (error) {
    throw new Error(
      `jagoNews24 page is not loaded correctly.\n ${error.message}`
    );
    // console.error("\njagoNews24Cat\t:", error);
  }
};
