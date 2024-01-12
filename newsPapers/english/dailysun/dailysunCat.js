// selector for dom elements
const selector = {
  catLeading: ".category_category_lead__jjrNG",
  leadMore: ".category_leadMore__vjXNW a",
  leadMore2: ".category_more_iteam__0NVkU a",
};

module.exports = async function dailysunCat(page) {
  // wait to load page
  await page.waitForSelector(".category_category_lead__jjrNG");

  // Extract news articles
  const articles = await page.evaluate(
    ({ catLeading, leadMore, leadMore2 }) => {
      const articlesData = [];

      function getNews(node) {
        let title;
        const link =
          node.tagName === "A" ? node.href : node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector("p.card-text")?.innerText.trim();
        const time = node.querySelector("time")?.innerText.trim();

        if (node.querySelector("h1"))
          title = node.querySelector("h1").innerText.trim();
        else if (node.querySelector("h2"))
          title = node.querySelector("h2").innerText.trim();
        else title = node.querySelector("h4").innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      articlesData.push(getNews(document.querySelector(catLeading)));

      // first element is omitted
      articlesData.push(
        ...Array.from(document.querySelectorAll(leadMore)).map((node) =>
          getNews(node)
        )
      );

      articlesData.push(
        ...Array.from(document.querySelectorAll(leadMore2)).map((node) =>
          getNews(node)
        )
      );

      return articlesData;
    },
    selector
  );

  return articles;
};
