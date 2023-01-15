const { invoke } = require("./app");
// yargs
// const yargs = require("yargs/yargs");
// const { hideBin } = require("yargs/helpers");
// const { argv } = yargs(hideBin(process.argv));

// console.log(argv);
// invoke(argv);

//commander
const { program } = require("commander");

program
  .option("-a, --action <type>")
  .option("--id <type>")
  .option("--name <type>")
  .option("--price <type>")
  .option("--path <type>");

program.parse();
const options = program.opts();
invoke(options);
