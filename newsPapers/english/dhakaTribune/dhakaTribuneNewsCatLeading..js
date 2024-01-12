module.exports = async function dhakaTribuneNewsCatLeading(page) {
  const leadContent = await page.waitForSelector(
    ".wrapper.container_content_100"
  );

  // Extract news articles
  const articles = await page.evaluate((leadContent) => {
    function getNews(node) {
      const title = node.querySelector(".title").innerText.trim();
      const link = node.querySelector("a").href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".summery")?.innerText.trim();
      // const time = node.querySelector(".date")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
        // time,
      };
    }

    const newsBoxes = [
      leadContent.querySelector(".each"),
      ...Array.from(
        document.querySelectorAll(
          ".black_bg_conent_brash .contents_listing .each"
        )
      ),
      ...Array.from(document.querySelector(".p_d").querySelectorAll(".each")),
    ];

    const articlesData = newsBoxes.map((news) => getNews(news));

    return articlesData;
  }, leadContent);

  return articles;
};
