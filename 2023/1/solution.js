const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./input.txt");

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
    .trim()
    .split("\n\n")
    .flatMap((line) => line.split("\n"))
    .map((line) => getFirstAndLastDigitsPart2(line))
    .reduce((prev, next) => parseInt(prev) + parseInt(next), 0);
};

try {
  const input = fs.readFileSync(filePath, "utf8");

  console.log(solution(input));
} catch (err) {
  console.error("Error reading file", err);
}
