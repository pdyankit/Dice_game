var ran1 = Math.floor(Math.random()*6)+1;

var randomImage = "dice"+ran1+".png"

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage)

var ran2 = Math.floor(Math.random()*6)+1

var randomImage = "dice"+ran2+".png"

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage)

var heading = document.querySelector("h1");
if(ran1 > ran2) {
   heading.innerHTML = "Player 1 Wins";
}
else {
    heading.innerHTML = "Player 2 Wins";
}