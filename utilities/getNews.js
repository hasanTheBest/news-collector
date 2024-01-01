const { bangladeshToday } = require("../newsPapers/english/bangladeshToday");
const { businessStandard } = require("../newsPapers/english/businessStandard");
const { dailyObserver } = require("../newsPapers/english/dailyObserver");
const { dailysun } = require("../newsPapers/english/dailysun");
const { dhakaTribune } = require("../newsPapers/english/dhakaTribune");
const { newage } = require("../newsPapers/english/newage");
const { newnation } = require("../newsPapers/english/newnation");
const { thedailystar } = require("../newsPapers/english/thedailystar");

const { ittefaq } = require("../newsPapers/ittefaq");
const { nayaDiganta } = require("../newsPapers/nayadiganta");
const { prothomAlo } = require("../newsPapers/prothomAlo");

exports.getNews = async function (url, page) {
  let data;

  switch (url) {
    // English News Paper links
    case "https://thebangladeshtoday.com/":
      data = await bangladeshToday(page);
      break;
    case "https://www.tbsnews.net/":
      data = await businessStandard(page);
      break;
    case "https://www.observerbd.com/":
      data = await dailyObserver(page);
      break;
    case "https://www.daily-sun.com/":
      data = await dailysun(page);
      break;
    case "https://www.dhakatribune.com/":
      data = await dhakaTribune(page);
      break;
    case "https://www.newagebd.net/":
      data = await newage(page);
      break;
    case "https://newnation.live/":
      data = await newnation(page);
      break;
    case "https://www.thedailystar.net/":
      data = await thedailystar(page);
      break;

      // Bangla Newspaper links
    case "https://www.ittefaq.com.bd/":
      data = ittefaq(page);
      break;
    case "https://www.dailynayadiganta.com/":
      data = await nayaDiganta(page);
      break;
    case "https://www.prothomalo.com/":
      data = prothomAlo(url);
      break;

    default:
      break;
  }

  return data;
};
