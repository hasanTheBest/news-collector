const { newspaperConfig } = require("./newspaperConfig");
const { scrapingFunctions } = require("./scrapingFunctions");

exports.getNews = async function (name, page, newsCat) {
  try {
    const scrapeFunction = scrapingFunctions(newsCat)[name];

    if (!scrapeFunction) {
      throw new Error("Scraping function not found for the given URL");
    }
    // await page.goto(newspaperConfig[name]);

    return await scrapeFunction(page);
  } catch (error) {
    console.error("Error during scraping:", error);
    return { error: "Error occurred during scraping" };
  }
};

// let data;
// switch (url) {
//   // English News Paper links
//   case "https://thebangladeshtoday.com/":
//     switch (category) {
//       case "national":
//         await page.goto(url + category)
//         data = await bangladeshTodayNational(page);
//         break;

//       case "international":
//         await page.goto(url + category)
//         data = await bangladeshTodayInternational(page);
//         break;

//       case "sports":
//         await page.goto(url + category)
//         data = await bangladeshTodaySports(page);
//         break;

//       case "entertainment":
//         await page.goto(url + category)
//         data = await bangladeshTodayEntertainment(page);
//         break;

//       default:
//         data = await bangladeshToday(page);
//         break;
//     }
//     break;

//   case "https://www.tbsnews.net/":
//     data = await businessStandard(page);
//     break;

//   case "https://www.observerbd.com/":
//     data = await dailyObserver(page);
//     break;

//   case "https://www.daily-sun.com/":
//     data = await dailysun(page);
//     break;

//   case "https://www.dhakatribune.com/":
//     data = await dhakaTribune(page);
//     break;

//   case "https://www.newagebd.net/":
//     data = await newage(page);
//     break;

//   case "https://newnation.live/":
//     data = await newnation(page);
//     break;

//   case "https://www.thedailystar.net/":
//     data = await thedailystar(page);
//     break;

//   /**
//    * Bangla Newspaper links
//    * */
//   case "https://www.alokitobangladesh.com/":
//     data = await alokitobangladesh(page);
//     break;

//   case "https://www.dainikamadershomoy.com/":
//     data = await amadersomoy(page);
//     break;

//   case "https://www.amarbarta.com/":
//     data = await amarbarta(page);
//     break;

//   case "https://www.bd-pratidin.com/":
//     data = await bangladeshPratidin(page);
//     break;

//   case "https://www.bhorerkagoj.com/":
//     data = await bhorerkagoj(page);
//     break;

//   case "https://bonikbarta.net/":
//     data = await bonikbarta(page);
//     break;

//   case "https://www.deshrupantor.com/":
//     data = await deshrupantor(page);
//     break;

//   case "https://www.dhakatimes24.com/":
//     data = await dhakatimes24(page);
//     break;

//   case "https://dailyinqilab.com/":
//     data = await inqilab(page);
//     break;

//   case "https://www.ittefaq.com.bd/":
//     data = await ittefaq(page);
//     break;

//   case "https://www.jaijaidinbd.com/":
//     data = await jaijaidin(page);
//     break;

//   case "https://www.dailyjanakantha.com/":
//     data = await janakantha(page);
//     break;

//   case "https://www.jugantor.com/":
//     data = await jugantor(page);
//     break;

//   case "https://www.kalbela.com/":
//     data = await kalbela(page);
//     break;

//   case "https://www.kalerkantho.com/":
//     data = await kalerkantha(page);
//     break;

//   case "https://mzamin.com/":
//     data = await manabzamin(page);
//     break;

//   case "https://www.manobkantha.com.bd/":
//     data = await manobkantha(page);
//     break;

//   case "https://www.dailynayadiganta.com/":
//     data = await nayaDiganta(page);
//     break;

//   case "https://www.prothomalo.com/":
//     data = await prothomAlo(page);
//     break;

//   case "https://www.protidinersangbad.com/":
//     data = await protidinersangbad(page);
//     break;

//   case "https://samakal.com/":
//     data = await samakal(page);
//     break;

//   case "https://dailysangram.com/":
//     data = await sangram(page);
//     break;

//   case "https://www.shomoyeralo.com/":
//     data = await shomoyeralo(page);
//     break;

//   case "https://sangbad.net.bd/":
//     data = await songbad(page);
//     break;

//   default:
//     break;
// }
