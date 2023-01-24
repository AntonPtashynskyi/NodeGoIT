const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // ввод из стандартного потока
  output: process.stdout, // вывод в стандартный поток
});

// Обработка каждой вписаной строки
rl.on("line", (cmd) => {
  console.log(`You just typed: ${cmd}`);
});

// Задать вопрос и обработать ответ в качевстве CallBack
rl.question("Как вас зовут?: ", (answer) => {
  console.log(`Приятно познакомиться ${answer}`);
  //   rl.close(); to close
  //   rl.pause(); to pause
});
