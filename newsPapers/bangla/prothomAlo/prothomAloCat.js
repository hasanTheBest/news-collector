module.exports = async function prothomAloCat(page) {
  await page.waitForSelector(".wide-story-card");

  // scroll to bottom
  // await page.scrollBy(0, 1600);

  // Extract news articles
  const articles = await page.evaluate(() => {
    // go to footer
    // document
    //   .querySelector("footer")
    //   .scrollIntoView({ behavior: "smooth", block: "end" });

    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector(".headline-title").textContent.trim();

      const excerpt = node.querySelector("p.excerpt")?.textContent.trim();
      const time = node.querySelector("time")?.textContent.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        imgSrc,
        excerpt,
        time,
      };
    }

    const selectors = [
      ...Array.from(document.querySelectorAll(".wide-story-card")),
      ...Array.from(document.querySelectorAll(".news_with_item ")),

      ...Array.from(
        document.querySelectorAll(".scroll-snap-carousel .focused-card")
      ),

      // initially not showing in node tree. Need to scroll to show
      ...Array.from(document.querySelectorAll(".news_item")),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
};
