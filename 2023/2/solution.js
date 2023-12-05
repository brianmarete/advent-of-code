const path = require("path");
const { getInput } = require("../../utils");

const getGameObjects = (game) => {
  return game.map((round) => {
    return round.split(",").reduce((obj, cubes) => {
      const [number, color] = cubes.trim().split(" ");
      obj[color] = +number;

      return obj;
    }, {});
  });
};

const partOne = (games) => {
  return games
    .map((game) => {
      let isValidGame = true;

      getGameObjects(game).forEach((set) => {
        if (set["blue"] > 14 || set["red"] > 12 || set["green"] > 13) {
          isValidGame = false;
        }
      });

      return isValidGame;
    })
    .reduce((prev, isValid, index) => {
      const gameId = index + 1;
      if (isValid) {
        return prev + gameId;
      }

      return prev;
    }, 0);
};

const partTwo = (games) => {
  return games
    .map((game) => {
      return getGameObjects(game).reduce(
        (prev, next) => {
          if (next["red"] > prev["red"]) {
            prev["red"] = next["red"];
          }

          if (next["blue"] > prev["blue"]) {
            prev["blue"] = next["blue"];
          }

          if (next["green"] > prev["green"]) {
            prev["green"] = next["green"];
          }

          return prev;
        },
        { red: 0, blue: 0, green: 0 }
      );
    })
    .reduce((prev, next) => {
      return prev + next["red"] * next["blue"] * next["green"];
    }, 0);
};

const solution = (input) => {
  const games = input.map((lines) => lines.split(":")[1].split(";"));

  return partTwo(games);
};

const filePath = path.join(__dirname, "./input.txt");
const input = getInput(filePath);

console.log(solution(input));
