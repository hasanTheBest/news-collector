module.exports = async function samakalCat(page) {
  try {
   // Wait for the news articles to load
  await page.waitForSelector(".DCatLead");

  // Extract news articles
  const articles = await page.evaluate(() => {
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h1")
        ? node.querySelector("h1").innerText.trim()
        : node.querySelector("h3").innerText.trim();

      const excerpt = node.querySelector("p")?.innerText.trim();
      const time = node.querySelector(".PublishTime")?.innerText.trim();
      const imgSrc = node.querySelector("img")?.src;

      return {
        title,
        link,
        excerpt,
        time,
        imgSrc,
      };
    }

    const selectors = [
      document.querySelector('.DCatLead'),
      ...Array.from(document.querySelectorAll('.Catcards')),
      ...Array.from(document.querySelectorAll('.CatListNews')),
    ];

    const articlesData = selectors.map((node) => getNews(node));

    return articlesData;
  });

  return articles;
  } catch (error) {
    console.error("Error in samakalCat:", error);
    // throw error; // add error handling logic here
  }
};
