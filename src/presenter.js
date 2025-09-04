import sumar from "./sumador";
import saludador from "./saludador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

// Elementos del saludador
const nombre = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const saludarForm = document.querySelector("#saludar-form");
const saludoDiv = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

saludarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  
  const nombreValue = nombre.value || undefined;
  const generoValue = genero.value || undefined;
  const edadValue = edad.value ? Number.parseInt(edad.value) : undefined;
  const idiomaValue = idioma.value || "ES";

  const saludo = saludador(nombreValue, horaActual, generoValue, edadValue, idiomaValue);
  saludoDiv.innerHTML = "<p>" + saludo + "</p>";
});
