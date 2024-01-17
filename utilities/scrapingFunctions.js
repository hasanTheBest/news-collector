const ajkerPatrika = require("../newsPapers/bangla/ajkerPatrika");
const { alokitobangladesh } = require("../newsPapers/bangla/alokitobangladesh");
const { amadersomoy } = require("../newsPapers/bangla/amadersomoy");
const { amarbarta } = require("../newsPapers/bangla/amarbarta");
const {
  bangladeshPratidin,
} = require("../newsPapers/bangla/bangladeshPratidin");
const bbcBangla = require("../newsPapers/bangla/bbcBangla");
const { bhorerkagoj } = require("../newsPapers/bangla/bhorerkagoj");
const { bonikbarta } = require("../newsPapers/bangla/bonikbarta");
const dainikAzadi = require("../newsPapers/bangla/dainikAzadi");
const { deshrupantor } = require("../newsPapers/bangla/deshrupantor");
const { dhakatimes24 } = require("../newsPapers/bangla/dhakatimes24");
const { inqilab } = require("../newsPapers/bangla/inqilab");
const { ittefaq } = require("../newsPapers/bangla/ittefaq");
const { jaijaidin } = require("../newsPapers/bangla/jaijaidin");
const { janakantha } = require("../newsPapers/bangla/janakantha");
const { jugantor } = require("../newsPapers/bangla/jugantor");
const { kalbela } = require("../newsPapers/bangla/kalbela");
const { kalerkantha } = require("../newsPapers/bangla/kalerkantha");
const { manabzamin } = require("../newsPapers/bangla/manabzamin");
const { manobkantha } = require("../newsPapers/bangla/manobkantha");
const { nayaDiganta } = require("../newsPapers/bangla/nayadiganta");
const { prothomAlo } = require("../newsPapers/bangla/prothomAlo");
const { protidinersangbad } = require("../newsPapers/bangla/protidinersangbad");
const { samakal } = require("../newsPapers/bangla/samakal");
const { sangram } = require("../newsPapers/bangla/sangram");
const { shomoyeralo } = require("../newsPapers/bangla/shomoyeralo");
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

exports.scrapingFunctions = function (newsCat) {
  return {
    async theBangladeshToday(page) {
      // Scraping logic for The Bangladesh Today
      return await bangladeshToday[newsCat](page);
    },

    async tbsNews(page) {
      // Scraping logic for TBS News
      return await businessStandard[newsCat](page);
    },

    async observerBD(page) {
      // Scraping logic for Observer BD
      return await dailyObserver[newsCat](page);
    },

    async dailySun(page) {
      // Scraping logic for Daily Sun
      return await dailysun[newsCat](page);
    },

    async dhakaTribune(page) {
      // Scraping logic for Dhaka Tribune
      // return await dhakaTribune[newsCat](page);
      return await dhakaTribune(page, newsCat);
    },

    async newAgeBD(page) {
      // Scraping logic for New Age BD
      return await newage(page, newsCat);
    },

    async newNation(page) {
      // Scraping logic for New Nation
      return await newnation(page, newsCat);
    },

    async theDailyStar(page) {
      // Scraping logic for The Daily Star
      return await thedailystar(page, newsCat);
    },

    /**
     *  BANGLA NEWSPAPERS
     * */
    async ajkerPatrika(page) {
      // Scraping logic for Alokito Bangladesh
      return await ajkerPatrika(page, newsCat);
    },

    async alokitoBangladesh(page) {
      // Scraping logic for Alokito Bangladesh
      return await alokitobangladesh(page, newsCat);
    },

    async amadershomoy(page) {
      // Scraping logic for Amader Shomoy
      return await amadersomoy(page, newsCat);
    },

    async amarBarta(page) {
      // Scraping logic for Amar Barta
      return await amarbarta(page, newsCat);
    },
    async bdPratidin(page) {
      // Scraping logic for BD Pratidin
      return await bangladeshPratidin(page, newsCat);
    },

    async bhorerKagoj(page) {
      // Scraping logic for Bhorer Kagoj
      return await bhorerkagoj(page, newsCat);
    },

    async bonikBarta(page) {
      // Scraping logic for Bonik Barta
      return await bonikbarta(page, newsCat);
    },

    async dainikAzadi(page) {
      return await dainikAzadi(page, newsCat);
    },

    async dhakaTimes24(page) {
      // Scraping logic for Dhaka Times 24
      return await dhakatimes24(page, newsCat);
    },

    async deshRupantor(page) {
      // Scraping logic for Desh Rupantor
      return await deshrupantor(page, newsCat);
    },

    async dailyInqilab(page) {
      // Scraping logic for Daily Inqilab
      return await inqilab(page, newsCat);
    },

    async ittefaq(page) {
      // Scraping logic for Ittefaq
      return await ittefaq(page, newsCat);
    },

    async jaiJaiDin(page) {
      // Scraping logic for Jai Jai Din
      return await jaijaidin(page, newsCat);
    },

    async dailyJanakantha(page) {
      // Scraping logic for Daily Janakantha
      return await janakantha(page, newsCat);
    },

    async jugantor(page) {
      // Scraping logic for Jugantor
      return await jugantor(page, newsCat);
    },

    async kalbela(page) {
      // Scraping logic for Kalbela
      return await kalbela(page, newsCat);
    },

    async kalerKantho(page) {
      // Scraping logic for Kaler Kantho
      return await kalerkantha(page, newsCat);
    },

    async manabZamin(page) {
      // Scraping logic for Manab Zamin
      return await manabzamin(page, newsCat);
    },

    async manobKantha(page) {
      // Scraping logic for Manob Kantha
      return await manobkantha(page, newsCat);
    },

    async dailyNayaDiganta(page) {
      // Scraping logic for Daily Naya Diganta
      return await nayaDiganta(page, newsCat);
    },

    async prothomAlo(page) {
      // Scraping logic for Prothom Alo
      return await prothomAlo(page, newsCat);
    },

    async protidinerSangbad(page) {
      // Scraping logic for Protidiner Sangbad
      return await protidinersangbad(page, newsCat);
    },

    async samakal(page) {
      // Scraping logic for Samakal
      return await samakal(page, newsCat);
    },

    async dailySangram(page) {
      // Scraping logic for Daily Sangram
      return await sangram(page, newsCat);
    },

    async shomoyEralo(page) {
      // Scraping logic for Shomoy Eralo
      return await shomoyeralo(page, newsCat);
    },

    async sangbad(page) {
      // Scraping logic for Sangbad
      return await songbad(page, newsCat);
    },

    /** ------------------
     * ONLINE NEWSPAPERS
     * ------------------- */ 
    async bbcBangla(page) {
      return await bbcBangla(page, newsCat);
    },
    
  };
};
