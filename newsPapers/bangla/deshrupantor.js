exports.deshrupantor = async function (page) {
  const leadContent = await page.waitForSelector(".special_33_3_66_7");

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
      ...Array.from(
        leadContent.querySelectorAll(".contents_listing:not(.hide_this_desktop")
      ),

      ...Array.from(document.querySelectorAll(".hide_this_mobile .col3")).slice(
        0,
        15
      ),
    ];

    const articlesData = newsBoxes.map((news) => getNews(news));

    return articlesData;
  }, leadContent);

  return articles;
};
