const fs = require("fs");

const getInput = (filePath) => {
  try {
    return fs
      .readFileSync(filePath, "utf8")
      .trim()
      .split("\n\n")
      .flatMap((line) => line.split("\n"));
  } catch (err) {
    console.error("Error reading file", err);
  }
};

module.exports = {
  getInput,
};
