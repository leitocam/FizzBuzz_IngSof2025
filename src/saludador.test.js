import saludador from "./saludador.js";
test('Iteración 1: saluda con "Hola"', () => {
    expect(saludador()).toBe("Hola");
});
//iteracion 2: saluda con "Hola {nombre}" programa
test('Iteración 2: saluda con "Hola {nombre}"', () => {
    expect(saludador("María")).toBe("Hola María");
    expect(saludador("Pedro")).toBe("Hola Pedro");
});