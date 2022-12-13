let linksArray = [
"https://madhumanbeing.github.io/veggieBowl.com",
"https://madhumanbeing.github.io/dhal.html",
"https://madhumanbeing.github.io/morroccanChickpea.html",
"https://madhumanbeing.github.io/zucchiniFritters.html",
"https://madhumanbeing.github.io/summerChickpea.html",
"https://madhumanbeing.github.io/vietnameseNoodles.html",
"https://madhumanbeing.github.io/waldorfSalad.html",
"https://madhumanbeing.github.io/peanutSoba.html",
"https://madhumanbeing.github.io/whiteBeanSalad.html",
"https://madhumanbeing.github.io/Eggplant%20dumplings.html",
"https://madhumanbeing.github.io/frittata.html",
"https://madhumanbeing.github.io/freekeh.html",
"https://madhumanbeing.github.io/crispyRoastPotatoes.html",
"https://madhumanbeing.github.io/khaoSoi.html",
"https://madhumanbeing.github.io/beefBrisket.html",
"https://madhumanbeing.github.io/ramen.html",
"https://madhumanbeing.github.io/thaiFishcakes.html"];

function randomMeal() {
  var i = parseInt(Math.random() * linksArray.length);
  location.href = linksArray[i];
}

