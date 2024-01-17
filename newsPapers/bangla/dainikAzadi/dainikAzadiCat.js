module.exports = async function dainikAzadiCat(page){
  try {
    await page.waitForSelector(".td_module_mx12");
    
    // Extract news articles
    const articles = await page.evaluate(() => {
      function getNews(node) {
        const title = node.querySelector(".entry-title").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;

        return {
          title,
          link,
          imgSrc,
        };
      }

      const newsBoxes = [
        ...Array.from(document.querySelectorAll('.td_module_mx12')),
        ...Array.from(document.querySelectorAll('.td-block-span6'))
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    });

    return articles;   
  } catch (error) {
    console.error('ajkerPatrikaCat', error)
  }
}