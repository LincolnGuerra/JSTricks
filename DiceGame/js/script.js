//let randomNumber1 = Math.random();
//randomNumber1 = randomNumber1 * 6;
//randomNumber1 = Math.floor(randomNumber1) + 1;

let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

let randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

let randomImgSrc = "assets/images/" + randomDiceImg; // images/dice1.png - images/dice6.pngg

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImgSrc2 = "assets/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Jogador 1 venceu!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Jogador 2 venceu!";
} else {
  document.querySelector("h1").innerHTML = "Empatou!";
}
