module.exports = async function banglaNews24Cat(page, newsCat) {
  try {
    await page.waitForSelector(".lead-3nd-news");

    // Extract news articles
    const articles = await page.evaluate((newsCat) => {
      function getNews(node) {
        let title;
        if (node.tagName === "A") title = node.innerText.trim();
        else if (node.querySelector("strong"))
          title = node.querySelector("a strong").innerText.trim();
        else if (node.querySelector(".list a"))
          title = node.querySelector(".list a").innerText.trim();
        else title = node.querySelector("a").textContent.trim();

        const link =
          node.tagName === "A" ? node.href : node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;

        const excerpt = node.querySelector("a + p")
          ? node.querySelector("a + p").innerText.trim()
          : node.querySelector("strong + p")?.innerText.trim();
        const time = node.querySelector("time")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      // const newsBox = [
      //   document.querySelector(".lead-news"),
      //   ...Array.from(document.querySelector(".lead-2nd-news").children),
      //   ...Array.from(document.querySelectorAll(".lead-3nd-news")),
      //   ...Array.from(document.querySelectorAll(".category-area")),
      // ];

      let selectors = [
        document.querySelector(".lead-news"),
        ...Array.from(document.querySelector(".lead-2nd-news").children),
        ...Array.from(document.querySelectorAll(".lead-3nd-news")),
        ...Array.from(document.querySelectorAll(".category-area")),
      ];

      if (newsCat === "leading") {
        selectors = [
          document.querySelector(".lead-news"),
          ...Array.from(document.querySelector(".lead-2nd-news").children),
          ...Array.from(document.querySelectorAll(".lead-3nd-news")),
        ];
      }

      const articlesData = selectors.map((news) => news && getNews(news));

      return articlesData;
    }, newsCat);

    return articles;
  } catch (error) {
    console.error("\nbanglaNews24Cat\t:", error);
  }
};
