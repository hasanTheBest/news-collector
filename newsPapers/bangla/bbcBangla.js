const bbcBanglaCat = require("./bbcBangla/bbcBanglaCat")
const bbcBanglaCatLeading = require("./bbcBangla/bbcBanglaCatLeading")

module.exports = async function bbcBangla(page, newsCat){
  if(newsCat === 'leading'){
    return await bbcBanglaCatLeading(page)
  }
  return await bbcBanglaCat(page)
}