module.exports = async function banglaNews24Cat(page){
  try {
    await page.waitForSelector(".category-area");

    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title =
        node.tagName === "A"
          ? node.innerText.trim()
          : node.querySelector("strong").innerText.trim();
        const link = node.tagName  === 'A' ? node.href : node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector("a p")?.innerText.trim();
        const time = node.querySelector("time")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time
        };
      }

      const newsBox = [
        document.querySelector('.lead-news'),
        ...Array.from(document.querySelector('.lead-2nd-news').children),
        ...Array.from(document.querySelectorAll('.lead-3nd-news')),
        ...Array.from(document.querySelectorAll('.category-area')),
      ]

      const articlesData = newsBox.map((news) => news && getNews(news));

      return articlesData;
    });

    return articles;
  } catch (error) {
    console.error("\nbanglaNews24Cat\t:", error)
  }
}