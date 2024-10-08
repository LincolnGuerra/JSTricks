const monkeyFace = document.querySelector(".monkey-face");
const monkeyHand = document.querySelector(".monkey-hand");
const email = document.getElementById("email");
const monkeyThought = document.querySelector(".monkey-thought");
const monkeyEyesBrows = document.querySelectorAll(".eye-brow");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let degree = 13;
let inputPrevLenght = [];

const showMonkeyHand = () => {
  monkeyHand.style.transform = "translateY(35%)";
};

document.addEventListener("click", (e) => {
  if (e.target.type !== "password") {
    monkeyHand.style.transform = "translateY(120%)";
  }
  if (e.target.type !== "email") {
    monkeyFace.style.transform = `perspective(800px) rotateZ(0deg)`;
    monkeyEyesBrows.forEach((eyeBrow) => {
      eyeBrow.style.transform = "translateY(-2px)";
    });
  }
});

// move monkey face
email.addEventListener("input", (e) => {
  let currentInputLength = String(e.target.value).length;
  let decrementInInputValue = inputPrevLenght.includes(currentInputLength);
  if (!decrementInInputValue && degree >= -10) {
    degree -= 1;
    inputPrevLenght.push(currentInputLength);
  }
  if (decrementInInputValue && degree < 13) {
    degree += 1;
  }
  if (!email.value.match(mailformat)) {
    monkeyThought.style.opacity = "1";
    monkeyEyesBrows.forEach((eyeBrow) => {
      eyeBrow.style.transform = "translateY(3px)";
    });
  }
  if (email.value.match(mailformat)) {
    monkeyThought.style.opacity = "0";
    monkeyEyesBrows.forEach((eyeBrow) => {
      eyeBrow.style.transform = "translateY(-3px)";
    });
  }
  monkeyFace.style.transform = `perspective(800px) rotateZ(${degree}deg)`;
});

// Primeiro, obtenha referências para os elementos

var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");
var p = document.getElementById("changeTxt");

// Adicione um ouvinte de evento ao campo de entrada de email
inputEmail.addEventListener("focus", function () {
  // Altere o conteúdo do elemento <p> e mostre-o
  p.innerHTML = "Digite seu e-mail!";
  monkeyThought.style.display = "block";
});

// Adicione um ouvinte de evento ao campo de entrada de senha
inputPassword.addEventListener("focus", function () {
  // Altere o conteúdo do elemento <p> e mostre-o
  p.innerHTML = "Prometo não olhar!";
  monkeyThought.style.display = "block";
});

// Adicione um ouvinte de evento ao corpo para esconder a div quando qualquer outro lugar é clicado
document.body.addEventListener("click", function (event) {
  // Verifique se o clique não foi em um dos campos de entrada
  if (event.target !== inputEmail && event.target !== inputPassword) {
    // Esconda a div
    monkeyThought.style.display = "none";
  }
});
