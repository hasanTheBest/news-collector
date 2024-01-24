const ajkerPatrika = require("../newsPapers/bangla/ajkerPatrika");
const { alokitobangladesh } = require("../newsPapers/bangla/alokitobangladesh");
const { amadersomoy } = require("../newsPapers/bangla/amadersomoy");
const { amarbarta } = require("../newsPapers/bangla/amarbarta");
const banglaNews24 = require("../newsPapers/bangla/banglaNews24");
const banglaTribune = require("../newsPapers/bangla/banglaTribune");
const {
  bangladeshPratidin,
} = require("../newsPapers/bangla/bangladeshPratidin");
const bbcBangla = require("../newsPapers/bangla/bbcBangla");
const { bhorerkagoj } = require("../newsPapers/bangla/bhorerkagoj");
const { bonikbarta } = require("../newsPapers/bangla/bonikbarta");
const dainikAzadi = require("../newsPapers/bangla/dainikAzadi");
const { deshrupantor } = require("../newsPapers/bangla/deshrupantor");
const dhakaPost = require("../newsPapers/bangla/dhakaPost");
const { dhakatimes24 } = require("../newsPapers/bangla/dhakatimes24");
const { inqilab } = require("../newsPapers/bangla/inqilab");
const { ittefaq } = require("../newsPapers/bangla/ittefaq");
const jagoNews24 = require("../newsPapers/bangla/jagoNews24");
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
const theFinancialExpress = require("../newsPapers/english/theFinancialExpress");
const { thedailystar } = require("../newsPapers/english/thedailystar");

exports.scrapingFunctions = function (newsCat) {
  return {
    async theBangladeshToday(page) {
      return await bangladeshToday[newsCat](page);
    },

    async tbsNews(page) {
      return await businessStandard[newsCat](page);
    },

    async observerBD(page) {
      return await dailyObserver[newsCat](page);
    },

    async dailySun(page) {
      return await dailysun[newsCat](page);
    },

    async dhakaTribune(page) {
      // return await dhakaTribune[newsCat](page);
      return await dhakaTribune(page, newsCat);
    },

    async newAgeBD(page) {
      return await newage(page, newsCat);
    },

    async newNation(page) {
      return await newnation(page, newsCat);
    },

    async theFinancialExpress(page) {
      return await theFinancialExpress(page, newsCat);
    },

    async theDailyStar(page) {
      return await thedailystar(page, newsCat);
    },

    /**
     *  BANGLA NEWSPAPERS
     * */
    async ajkerPatrika(page) {
      return await ajkerPatrika(page, newsCat);
    },

    async alokitoBangladesh(page) {
      return await alokitobangladesh(page, newsCat);
    },

    async amadershomoy(page) {
      return await amadersomoy(page, newsCat);
    },

    async amarBarta(page) {
      return await amarbarta(page, newsCat);
    },
    async bdPratidin(page) {
      return await bangladeshPratidin(page, newsCat);
    },

    async bhorerKagoj(page) {
      return await bhorerkagoj(page, newsCat);
    },

    async bonikBarta(page) {
      return await bonikbarta(page, newsCat);
    },

    async dainikAzadi(page) {
      return await dainikAzadi(page, newsCat);
    },

    async dhakaTimes24(page) {
      return await dhakatimes24(page, newsCat);
    },

    async deshRupantor(page) {
      return await deshrupantor(page, newsCat);
    },

    async dailyInqilab(page) {
      return await inqilab(page, newsCat);
    },

    async ittefaq(page) {
      return await ittefaq(page, newsCat);
    },

    async jaiJaiDin(page) {
      return await jaijaidin(page, newsCat);
    },

    async dailyJanakantha(page) {
      return await janakantha(page, newsCat);
    },

    async jugantor(page) {
      return await jugantor(page, newsCat);
    },

    async kalbela(page) {
      return await kalbela(page, newsCat);
    },

    async kalerKantho(page) {
      return await kalerkantha(page, newsCat);
    },

    async manabZamin(page) {
      return await manabzamin(page, newsCat);
    },

    async manobKantha(page) {
      return await manobkantha(page, newsCat);
    },

    async dailyNayaDiganta(page) {
      return await nayaDiganta(page, newsCat);
    },

    async prothomAlo(page) {
      return await prothomAlo(page, newsCat);
    },

    async protidinerSangbad(page) {
      return await protidinersangbad(page, newsCat);
    },

    async samakal(page) {
      return await samakal(page, newsCat);
    },

    async dailySangram(page) {
      return await sangram(page, newsCat);
    },

    async shomoyEralo(page) {
      return await shomoyeralo(page, newsCat);
    },

    async sangbad(page) {
      return await songbad(page, newsCat);
    },

    /** ------------------
     * ONLINE NEWSPAPERS
     * ------------------- */
    async bbcBangla(page) {
      return await bbcBangla(page, newsCat);
    },

    async banglaNews24(page) {
      return await banglaNews24(page, newsCat);
    },

    async jagoNews24(page) {
      return await jagoNews24(page, newsCat);
    },
    async banglaTribune(page) {
      return await banglaTribune(page, newsCat);
    },
    async dhakaPost(page) {
      return await dhakaPost(page, newsCat);
    },
  };
};
