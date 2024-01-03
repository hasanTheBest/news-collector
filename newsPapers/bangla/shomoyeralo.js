exports.shomoyeralo = async function (page) {
  const leadContent = await page.waitForSelector(".container .col-lg-9");

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    function getNews(node) {
      const link = node.querySelector("a").href;

      let title, excerpt;
      if (node.querySelector(".lead")) {
        title = node.querySelector(".lead a").innerText.trim()
        excerpt = node.innerText.split("\n")[1].trim();
      }
      else if (node.querySelector(".title")) {
        title = node.querySelector(".title a").innerText.trim();
        excerpt = node.querySelector(".news.m_none").innerText.trim();
      }
      else
        title = node.querySelector(".media-left a").innerText.trim();

      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    const newsBoxes = [
      leadContent.querySelector(".col-lg-7"),

      ...Array.from(leadContent.querySelectorAll(".col-lg-5 .media")),
      ...Array.from(leadContent.querySelectorAll(".SecCol")),
    ];

    const articlesData = newsBoxes.map((news) => getNews(news));

    return articlesData;
  }, leadContent);

  return articles;
};
