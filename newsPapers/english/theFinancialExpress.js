const theFinancialExpressCat = require("./theFinancialExpress/theFinancialExpressCat");
const theFinancialExpressCatLeading = require("./theFinancialExpress/theFinancialExpressCatLeading");
const theFinancialExpressCatLifestyle = require("./theFinancialExpress/theFinancialExpressCatLifestyle");

module.exports = async function theFinancialExpress(page, newsCat) {
  if (newsCat === "leading") {
    return await theFinancialExpressCatLeading(page);
  }

  if (newsCat === "lifestyle") {
    return await theFinancialExpressCatLifestyle(page);
  }
  return await theFinancialExpressCat(page);
};
