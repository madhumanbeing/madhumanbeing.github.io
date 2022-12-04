let randomMeal = ["https://madhumanbeing.github.io/veggieBowl.html",
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

function shuffle(randomMeal) {
    let currentIndex = randomMeal.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [randomMeal[currentIndex], randomMeal[randomIndex]] = [
        randomMeal[randomIndex], randomMeal[currentIndex]];
    }
  
    return randomMeal;
  }

  function randomize(){
    var myarray = new Array("item1", "item2", "item3");
    var randomId =  Math.floor((Math.random()*myarray.length));
    var randomItem = myarray[randomid];
  
    alert(randomItem);
  }