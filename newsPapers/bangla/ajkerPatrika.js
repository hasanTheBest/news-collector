const ajkerPatrikaCatLeading = require("./ajkerPatrika/ajkerPatrikaCatLeading")
const ittefaqCat = require("./ittefaq/ittefaqCat")

// ittefaq, ajkerPatrika, Dhakatribue, inqilab same laout

module.exports = async function ajkerPatrika(page, newsCat){
  if(newsCat === 'leading'){
    return await ajkerPatrikaCatLeading(page)
  }
  return await ittefaqCat(page)  // laout is same
  }