const EventsEmitter = require("events");

class MeuEmissor extends EventsEmitter {}

const meuEmissor = new MeuEmissor();

const eventName = "usuario:click";

meuEmissor.on(eventName, (click) => {
  console.log("Um usuário clicou", click);
});

// let count = 0;

// setInterval(() => {
//   meuEmissor.emit(
//     eventName,
//     `Clicou no ok ${count++} ${count > 2 ? "vezes" : "vez"}`
//   );
// }, 1000);

const stdin = process.openStdin();

stdin.addListener("data", (value) => {
  console.log(`Você digitou: ${value.toString().trim()}`);
});
