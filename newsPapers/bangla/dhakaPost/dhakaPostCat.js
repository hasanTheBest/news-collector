module.exports = async function dhakaPostCat(page, newsCat) {
  await page.waitForSelector("a.group");

  // Extract news articles
  const articles = await page.evaluate((newsCat) => {
    function getNews(node) {
      let title;
      if (node.querySelector("h2"))
        title = node.querySelector("h2").innerText.trim();
      else if (node.querySelector("h3"))
        title = node.querySelector("h3").innerText.trim();
      else title = node.querySelector("h1").innerText.trim();
      const link = node.href;
      const imgSrc = node.querySelector("img")?.src;
      const excerpt = node.querySelector("p")?.innerText.trim();

      return {
        title,
        link,
        imgSrc,
        excerpt,
      };
    }

    let selectors = Array.from(document.querySelectorAll("a.group"));

    if (newsCat === "leading") {
      selectors = selectors.splice(0, 10);
    } else {
      selectors = selectors.splice(0, 16);
    }

    const articlesData = selectors.map((news) => news && getNews(news));

    return articlesData;
  }, newsCat);

  return articles;
};

// need to retrieve 16 post for newsCate but get only 11 post. fixation need
