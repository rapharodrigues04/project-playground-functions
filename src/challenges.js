// Desafio 1
function compareTrue(dormir, acordado) {
  if (dormir == true && acordado == true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
let frase = 'go Trybe';

function splitSentence(frase) {
  return frase.split(" ");
};

// Desafio 4
let wordConcat = ['Raphael', 'Cicero', 'Rodrigues', 'Araujo'];

function concatName(wordConcat) {
  let firstWord = wordConcat[0];
  let lastWord = wordConcat[wordConcat.length - 1];
  return lastWord + ', ' + firstWord;
};

// Desafio 5
let wins = 10;
let ties = 3;

function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
};

// Desafio 6
let arrayNumeros = [9, 1, 2, 3, 9, 5, 7];

function highestCount(arrayNumeros) {
  let maiorNumero = Math.max(...arrayNumeros);
  let repeticoes = 0;
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] === maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
};

// Desafio 7
let cat1 = 3;
let cat2 = 3;
let mouse = 1;

function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > mouse && cat1 < cat2) {
    return "cat1";
  } else if (cat2 > mouse && cat2 < cat1) {
    return "cat2";
  } else if (cat1 == cat2) {
    return "os gatos trombam e o rato foge";
  };
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
