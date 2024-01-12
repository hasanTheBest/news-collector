const { dailyObserverCat } = require("./dailyObserver/dailyObserverCat");

exports.dailyObserver = {
  leading: async function (page) {
    const leadContent = await page.waitForSelector("#slider1_container");

    // Extract news articles
    const articles = await page.evaluate((leadContent) => {
      function getNews(node) {
        const title = node.querySelector(".slider_font")
          ? node.querySelector(".slider_font").innerText.trim()
          : node.querySelector(".title_inner").innerText.trim();
        const link = node.querySelector("a").href;
        const imgSrc = node.querySelector("img")?.src;

        return {
          title,
          link,
          imgSrc,
        };
      }

      const newsBoxes = [
        ...Array.from(
          leadContent.querySelector("div[u='navigator']").previousElementSibling
            .children
        ).slice(1),
        ...Array.from(
          leadContent.parentElement.parentElement.querySelectorAll(
            "div.boxNews[style='margin-bottom: 20px; padding: 0 0 0 0']"
          )
        ),
        ...Array.from(
          leadContent.parentElement.parentElement.previousElementSibling.querySelectorAll(
            ".boxNews"
          )
        ),
      ];

      const articlesData = newsBoxes.map((news) => getNews(news));

      return articlesData;
    }, leadContent);

    return articles;
  },

  national: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  international: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  politics: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  business: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  sports: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  countryside: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  // layout is different but works
  education: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  health: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  crime: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },

  lifestyle: async function (page) {
    return await dailyObserverCat("#toPrint", page);
  },
};
