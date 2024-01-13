module.exports = async function nayadigantaCat(page) {
  // Wait for the news articles to load
  await page.waitForSelector(".main");

  const articles = await page.evaluate(() => {
    function getNews(node) {
      let title;

      if (node.querySelector("h2"))
        title = node.querySelector("h2").innerText.trim();
      else if (node.querySelector("h3"))
        title = node.querySelector("h3").innerText.trim();
      else
        title = node
          .querySelector(".column-no-left-padding > a")
          .innerText.trim();

      const link = node.querySelector("a").href;
      const excerpt = node.querySelector("p")?.innerText.trim();
      const time = node
        .querySelector(".news-list ul li:last-child i")
        ?.nextSibling.textContent.trim();

      return {
        title,
        link,
        excerpt,
        time,
      };
    }

    const selectors = [
      document.querySelector(".lead-news"),
      ...Array.from(document.querySelectorAll(".sub-lead-news")),
      ...Array.from(document.querySelectorAll(".sub-lead-list")),
      ...Array.from(document.querySelectorAll(".box-news-item")),
      ...Array.from(document.querySelectorAll(".news-item")),

      // education page
      ...Array.from(document.querySelectorAll(".news-list")),
    ];

    const articlesData = selectors.map((node) => node && getNews(node));

    return articlesData;
  });

  return articles;
};
