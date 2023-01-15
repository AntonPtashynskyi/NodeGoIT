const readline = require("readline");
const fs = require("fs").promises;
const { program } = require("commander");
require("colors");

program.option(
  "-f ---file [type]",
  "file for saving game results",
  "results.txt"
);

program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().File;
console.log(program.opts());
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = (value) => {
  if (isNaN(value)) {
    console.log("Enter the number".red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log("Entered number should be belows 1 to 10".red);
    return false;
  }
  return true;
};

const log = async (data) => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`Saved result to file ${logFile}`.green);
  } catch (error) {
    console.log(`Cant save to file ${logFile}`.red);
  }
};

const game = () => {
  rl.question("Enter the number from 1 to 10 for guess".yellow, (value) => {
    let a = +value;
    if (!isValid(a)) {
      game();
      return;
    }

    count += 1;
    if (a === mind) {
      console.log("Congrats you WIN! for %d steps".green, count);
      log(
        `${new Date().toLocaleDateString()}: Congrats you Guess number by ${count} step(s)`
      ).finally(() => rl.close());
      return;
    }
    console.log("Try again".red);
    game();
  });
};

game();
