module.exports = async function dainikAzadiCatLeading(page, newsCat){
  try {
    await page.waitForSelector(".td-block-span6");
    
    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector(".entry-title").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector(".td-excerpt")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
        };
      }

      const newsBoxes = [
        ...Array.from(document.querySelectorAll('.td-block-span6')).splice(0, 1),
        ...Array.from(document.querySelectorAll('.td_module_6')).splice(0, 6),
        ...Array.from(document.querySelectorAll('.td-block-span6')).splice(2, 10),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    });

    return articles;   
  } catch (error) {
    console.error('ajkerPatrikaCat', error)
  }
  }