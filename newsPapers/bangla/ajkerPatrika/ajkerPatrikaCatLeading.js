module.exports = async function ajkerPatrikaCatLeading(page, newsCat){
  try {
    await page.waitForSelector(".content_type_news");
    
    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector(".title").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector(".summery")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
        };
      }

      const newsBoxes = [
        ...Array.from(document.querySelector('.p_d._col').querySelectorAll(".content_type_news")),
        ...Array.from(document.querySelectorAll('.p_c._col')).splice(0, 9)
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    });

    return articles;   
  } catch (error) {
    console.error('ajkerPatrikaCat', error)
  }
  }