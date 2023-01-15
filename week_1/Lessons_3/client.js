const { invoke } = require("./app");
// in console                                   // node client.js --action getAll
const args = process.argv.slice(2); // ["--action", "getAll"]
const indexAction = args.indexOf("--action"); // 0
const actionValue = args[indexAction + 1]; // getAll

if (indexAction !== -1) {
  invoke({ action: actionValue });
}
