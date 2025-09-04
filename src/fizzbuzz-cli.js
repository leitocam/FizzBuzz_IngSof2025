import { fizzbuzz } from "./FizzBuzz.js";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Ingrese un número: ", (n) => {
  const num = parseInt(n);
  const seq = Array.from({length: num}, (_,i) => fizzbuzz(i+1));
  console.log(seq.join(", "));
  readline.close();
});
