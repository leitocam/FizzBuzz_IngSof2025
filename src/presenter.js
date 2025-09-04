import { fizzbuzz } from "./FizzBuzz";

// Elementos del FizzBuzz
const numeroInput = document.querySelector("#numero");
const fizzbuzzForm = document.querySelector("#fizzbuzz-form");
const fizzbuzzDiv = document.querySelector("#fizzbuzz-div");

fizzbuzzForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(numeroInput.value);
  if (num && num > 0) {
    const sequence = Array.from({length: num}, (_, i) => fizzbuzz(i + 1));
    fizzbuzzDiv.innerHTML = "<p>" + sequence.join(", ") + "</p>";
  }
});
