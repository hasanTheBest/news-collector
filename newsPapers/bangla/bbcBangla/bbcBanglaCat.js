module.exports = async function bbcBanglaCat(page){
  try {
    await page.waitForSelector(".bbc-t44f9r");
    
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
          time
        };
      }

      const articlesData = Array.from(document.querySelectorAll('.bbc-t44f9r')).map((news) => getNews(news));

      return articlesData;
    });

    return articles;  
  } catch (error) {
    console.error("bbcBanglaCat", error)
  }
}