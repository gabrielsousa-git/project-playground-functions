// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}

console.log(calcArea (10, 50));
console.log(calcArea (5, 2));

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ")
  return result
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let concat = array[array.length -1] + ", " + array[0];
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  if (wins === true) {
    return wins ++
  } else if (ties === true) {
    return ties ++
  }
  let points = (wins * 3) + ties;
  return points;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let biggestNumber = -Infinity;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
      biggestNumber = numbers[index];
    }
  }
  let result = 0;
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
   if (biggestNumber === numbers[index2]) {
       result += 1
    }
  }
  return result;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}
// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 3 !== 0 || numbers[index] % 5 !== 0) {
      result.push('bug!');
    }
  } 
  return result;
}

// Desafio 9
function encode(vogais) {
  let newPhrase = vogais.replaceAll('a', '1');
  let newPhrase1 = newPhrase.replaceAll('e', '2');
  let newPhrase2 = newPhrase1.replaceAll('i', '3');
  let newPhrase3 = newPhrase2.replaceAll('o', '4');
  let result = newPhrase3.replaceAll('u', '5');

  return result;
} 

function decode(numeros) {
  let newPhrase = numeros.replaceAll('1', 'a');
  let newPhrase1 = newPhrase.replaceAll('2', 'e');
  let newPhrase2 = newPhrase1.replaceAll('3', 'i');
  let newPhrase3 = newPhrase2.replaceAll('4', 'o');
  let result = newPhrase3.replaceAll('5', 'u');

  return result;
}

// Desafio 10
function techList() {
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
  highestCount,
  splitSentence,
  techList,
};
