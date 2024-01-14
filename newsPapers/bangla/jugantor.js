const jugantorCat = require("./jugantor/jugantorCat");

exports.jugantor = async function (page, newsCat) {
  if(newsCat === "leading"){
    return await jugantorCatLeading(page)
  }

  return await jugantorCat(page)
};
// document.querySelectorAll("#show-news.d-xl-block")

// Array.from(document.querySelectorAll("#show-news.d-xl-block")).map((div) => {
// 	const divs = Array.from(div.firstElementChild.children).splice(0, 3)

// return divs
// })

// document.querySelectorAll(".card")
