exports.amarbarta = async function (page) {
  const leadContent = await page.waitForSelector(".homeTop .col-lg-9");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title =  node.querySelector(".title").innerText.trim() 

      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".summery").innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const newsBoxes = [
      ...Array.from(leadContent.querySelectorAll("#toplead-left .common-lead-content")),
      ...Array.from(leadContent.querySelectorAll(".col-lg-5 .sub2-lead-content")),
    ];

    const articlesData = newsBoxes.map((news) => getNews(news));

    return articlesData;
  }, leadContent);

  return articles;
};
