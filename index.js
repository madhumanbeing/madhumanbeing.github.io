let linksArray = [
"veggieBowl.html",
"dhal.html",
"morroccanChickpea.html",
"zucchiniFritters.html",
"summerChickpea.html",
"vietnameseNoodles.html",
"waldorfSalad.html",
"peanutSoba.html",
"whiteBeanSalad.html",
"Eggplant%20dumplings.html",
"frittata.html",
"freekeh.html",
"crispyRoastPotatoes.html",
"khaoSoi.html",
"beefBrisket.html",
"ramen.html",
"thaiFishcakes.html"];

function randomMeal() {
  var i = parseInt(Math.random() * linksArray.length);
  location.href = linksArray[i];
}



