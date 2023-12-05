const path = require("path");
const { getInput } = require("../../utils");

const getFirstAndLastDigitsPart1 = (line) => {
  const numbers = line
    .split("")
    //  Get the digits in the string
    .filter((char) => !isNaN(parseInt(char)));

  //  Combine the first and last digits
  return `${numbers[0]}${numbers[numbers.length - 1]}`;
};

const digitMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const digitMapEntries = Object.entries(digitMap);

const convertToNumber = (str) => {
  for ([word, digit] of digitMapEntries) {
    if (str.startsWith(word)) {
      return digit;
    }
  }
  // Handle strings that don't map to a number
  return "";
};

const getFirstAndLastDigitsPart2 = (line) => {
  const numbers = line
    .split("")
    .map((char, index) => {
      if (!isNaN(parseInt(char))) {
        return +char;
      }

      return convertToNumber(line.slice(index));
    })
    .filter((char) => !isNaN(parseInt(char)));

  return `${numbers[0]}${numbers[numbers.length - 1]}`;
};

const solution = (input) => {
  return input
    .map((line) => getFirstAndLastDigitsPart2(line))
    .reduce((prev, next) => parseInt(prev) + parseInt(next), 0);
};

const filePath = path.join(__dirname, "./input.txt");
const input = getInput(filePath);

console.log(solution(input));
