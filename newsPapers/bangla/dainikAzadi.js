const dainikAzadiCat = require("./dainikAzadi/dainikAzadiCat")
const dailysunCatLeading = require("../english/dailysun/dailysunCatLeading")
const dainikAzadiCatLeading = require("./dainikAzadi/dainikAzadiCatLeading")

module.exports = async function dainikAzadi(page, newsCat){
if(newsCat === 'leading'){
  return await dainikAzadiCatLeading(page)
}
return await dainikAzadiCat(page)
}