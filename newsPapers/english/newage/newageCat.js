module.exports = async function newageCat(page, newsCat) {
  const leadContent = await page.waitForSelector(".contentPartOne");

  // Extract news articles
  const articles = await page.evaluate(
    (leadContent, newsCat) => {
      const articlesData = [];

      function getNews(node) {
        const title = node.querySelector("h3").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector("p")?.innerText.trim();
        const time = node.querySelector("p span")?.innerText.trim();

        return {
          title,
          link,
          excerpt,
          imgSrc,
          time,
        };
      }

      if (newsCat === "politics" || "countryside") {
        articlesData.push(
          ...Array.from(
            leadContent.querySelectorAll(".categoryContent ul li")
          ).map((node) => getNews(node))
        );
      } else {
        articlesData.push(getNews(leadContent.querySelector(".categoryLeft")));
        articlesData.push(getNews(leadContent.querySelector(".categoryRight")));
        articlesData.push(
          ...Array.from(
            leadContent.querySelectorAll(".categoryContent ul li")
          ).map((node) => getNews(node))
        );
      }

      return articlesData;
    },
    leadContent,
    newsCat
  );

  return articles;
};
