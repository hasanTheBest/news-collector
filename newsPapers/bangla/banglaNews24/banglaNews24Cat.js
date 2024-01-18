module.exports = async function banglaNews24Cat(page){
  try {
    await page.waitForSelector(".bbc-bjn8wh");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector("h2") ? node.querySelector("h2").innerText.trim() : node.querySelector("h3").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector(".promo-paragraph")?.innerText.trim();
        const time = node.querySelector("time")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
        };
      }

      const newsBox = [
        ...Array.from(document.querySelectorAll('.bbc-bjn8wh')).splice(1, 19),
        ...document.querySelectorAll('#অন্যান্য-খবর + div ul li')
      ]

      const articlesData = newsBox.map((news) => getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("banglaNews24CatLeading", error)
  }
}