module.exports = async function bhorerkagojCat(page){
  try {
    // Wait for the news articles to load
   await page.waitForSelector(".desktopSectionLead");

  const articles = await page.evaluate(() => {
    // helper function for extract news
    function getNews(node) {
      const link = node.querySelector("a").href;
      const title = node.querySelector("h1")
        ? node.querySelector("h1").innerText.trim()
        : node.querySelector("h3").innerText.trim();

      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector(".desktopSummary")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    // const selectors = [
    //   Array.from(leadArea.querySelectorAll(".topNews .media")), // 2
    // ];

    const articlesData = Array.from(document.querySelectorAll('.desktopSectionLead')).map((node) => getNews(node));

    return articlesData;
  });

  return articles;
  } catch (error) {
    console.error('Error in bhorerkagojCat', error)
  }
}