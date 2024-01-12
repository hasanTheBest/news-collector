const {
  businessStandardCat,
} = require("./businessStandard/businessStandardCat");

exports.businessStandard = {
  leading: async function (page) {
    const leadContent = await page.waitForSelector(".pane-top-news-v4");

    // Extract news articles
    const articles = await page.evaluate((leadContent) => {
      function getNews(node) {
        const title = node.querySelector("h2")
          ? node.querySelector("h2").innerText.trim()
          : node.querySelector("h3").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;
        const excerpt = node.querySelector("p.card-intro")?.innerText.trim();
        const time = node.querySelector(".date")?.innerText.trim();

        return {
          title,
          link,
          imgSrc,
          excerpt,
          time,
        };
      }

      const newsBoxes = [
        leadContent.querySelector(".strip-bg-offwhite"),
        ...Array.from(
          leadContent.querySelectorAll(".strip-bg-white .medium-4.small-12")
        ),
        ...Array.from(
          leadContent.querySelectorAll(".without-image.medium-3 .mb-5.p-top-15")
        ),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    }, leadContent);

    return articles;
  },

  national: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  international: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  politics: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  business: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  sports: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  feature: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  // layout is different but works
  entertainment: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  opinion: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  tech: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  health: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },

  crime: async function (page) {
    return await businessStandardCat(".view-content.row", page);
  },
};
