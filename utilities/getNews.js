const { amadersomoy } = require("../newsPapers/bangla/amadershomoy");
const { bhorerkagoj } = require("../newsPapers/bangla/bhorerkagoj");
const { bonikbarta } = require("../newsPapers/bangla/bonikbarta");
const { inqilab } = require("../newsPapers/bangla/inqilab");
const { ittefaq } = require("../newsPapers/bangla/ittefaq");
const { jaijaidin } = require("../newsPapers/bangla/jaijaidin");
const { janakantha } = require("../newsPapers/bangla/janakantha");
const { jugantor } = require("../newsPapers/bangla/jugantor");
const { kalerkantha } = require("../newsPapers/bangla/kalerkantha");
const { manabzamin } = require("../newsPapers/bangla/manabzamin");
const { nayaDiganta } = require("../newsPapers/bangla/nayadiganta");
const { prothomAlo } = require("../newsPapers/bangla/prothomAlo");
const { samakal } = require("../newsPapers/bangla/samakal");
const { songbad } = require("../newsPapers/bangla/songbad");

// English newspapers
const { bangladeshToday } = require("../newsPapers/english/bangladeshToday");
const { businessStandard } = require("../newsPapers/english/businessStandard");
const { dailyObserver } = require("../newsPapers/english/dailyObserver");
const { dailysun } = require("../newsPapers/english/dailysun");
const { dhakaTribune } = require("../newsPapers/english/dhakaTribune");
const { newage } = require("../newsPapers/english/newage");
const { newnation } = require("../newsPapers/english/newnation");
const { thedailystar } = require("../newsPapers/english/thedailystar");

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

    /**
     * Bangla Newspaper links
     * */
    case "https://www.dainikamadershomoy.com/":
      data = await amadersomoy(page);
      break;

    case "https://www.bhorerkagoj.com/":
      data = await bhorerkagoj(page);
      break;

    case "https://bonikbarta.net/":
      data = await bonikbarta(page);
      break;

    case "https://dailyinqilab.com/":
      data = await inqilab(page);
      break;

    case "https://www.ittefaq.com.bd/":
      data = await ittefaq(page);
      break;

    case "https://www.jaijaidinbd.com/":
      data = await jaijaidin(page);
      break;

    case "https://www.dailyjanakantha.com/":
      data = await janakantha(page);
      break;

    case "https://www.jugantor.com/":
      data = await jugantor(page);
      break;

    case "https://www.kalerkantho.com/":
      data = await kalerkantha(page);
      break;

    case "https://mzamin.com/":
      data = await manabzamin(page);
      break;

    case "https://www.dailynayadiganta.com/":
      data = await nayaDiganta(page);
      break;

    case "https://www.prothomalo.com/":
      data = await prothomAlo(page);
      break;

    case "https://samakal.com/":
      data = await samakal(page);
      break;

    case "https://sangbad.net.bd/":
      data = await songbad(page);
      break;

    default:
      break;
  }

  return data;
};
