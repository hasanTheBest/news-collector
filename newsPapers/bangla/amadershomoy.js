exports.amadersomoy = async function (page) {
  const leadArea = await page.waitForSelector(".tc-tabs-content .sub-content");

  // Extract news articles
  const articles = await page.evaluate((leadArea) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".lead-title")
        ? node.querySelector(".lead-title").innerText.trim()
        : node.querySelector(".title").innerText.trim();
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".intro")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const selectors = [
      leadArea.firstElementChild.firstElementChild,
      ...Array.from(
        leadArea.querySelectorAll(".tc-post-list-style2 > .row > div")
      ),
      ...Array.from(leadArea.lastElementChild.children), // starter div with all child div
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  }, leadArea);

  return articles;
};
