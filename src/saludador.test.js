import saludador from "./saludador.js";
test('Iteración 1: saluda con "Hola"', () => {
    expect(saludador()).toBe("Hola");
});
