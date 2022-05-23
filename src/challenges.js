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

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ")
  return result
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length -1] + ", " + array[0];
  return concat;
}

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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distCat1FromMouse = Math.abs(cat1 - mouse);
  const distCat2FromMouse = Math.abs(cat2 - mouse);
  if (distCat1FromMouse < distCat2FromMouse) {
    return 'cat1'
  } else if (distCat2FromMouse < distCat1FromMouse) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
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
function techList(array, string) {
  array = array.sort();
  if (array != '') {
    for (let key in array) {
      array[key] = {
        tech: array[key],
        name: string
      }
    }
  } else {
    return 'Vazio!'
  }
return array;
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
