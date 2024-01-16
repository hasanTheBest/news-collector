const bhorerkagojCat = require("./bhorerkagoj/bhorerkagojCat");
const bhorerkagojCatLeading = require("./bhorerkagoj/bhorerkagojCatLeading");

exports.bhorerkagoj = async function (page, newsCat) {
  try {
    if(newsCat === 'leading'){
      return await bhorerkagojCatLeading(page)
    }
  
    return await bhorerkagojCat(page)
  } catch (error) {
    console.error('Error in bhorerkagoj', error)
  }
};
