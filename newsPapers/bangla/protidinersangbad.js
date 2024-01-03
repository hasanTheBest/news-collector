exports.protidinersangbad = async function (page) {
  const leadContent = await page.waitForSelector(".Homepage-Lead-Section");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title =  node.querySelector("h4") ? node.querySelector("h4").innerText.trim() : node.querySelector("h6").innerText.trim() 
      const time = node.querySelector(".time").innerText.trim();

      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p")?.innerText.trim();


      return {
        title,
        link,
        imgSrc,
        excerpt,
        time
      };
    }

    const newsBoxes = [
      leadContent.querySelector(".col-sm-8"), //main lead
      leadContent.querySelector(".sub-lead"),
      ...Array.from(leadContent.querySelectorAll(".htl_sub .col-sm-4")),
    ];

    const articlesData = newsBoxes.map((news) => getNews(news));

    return articlesData;
  }, leadContent);

  return articles;
};
