const banglaNews24Cat = require("./banglaNews24/banglaNews24Cat")
const banglaNews24CatLeading = require("./banglaNews24/banglaNews24CatLeading")

module.exports = async function bbcBangla(page, newsCat){
  if(newsCat === 'leading'){
    return await banglaNews24CatLeading(page)
  }
  return await banglaNews24Cat(page)
}