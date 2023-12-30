const { ittefaq } = require("../newsPapers/ittefaq");
const { nayaDiganta } = require("../newsPapers/nayadiganta");
const { prothomAlo } = require("../newsPapers/prothomAlo");
const { thedailystar } = require("../newsPapers/thedailystar");

exports.getNews = async function (url, page) {
  let data;

  switch (url) {
    case "https://www.thedailystar.net/":
      data = await thedailystar(page);
      break;
    case "https://www.ittefaq.com.bd/":
      data = ittefaq(page);
      break;
    case "https://www.dhakatribune.com/":
      data = "";
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
