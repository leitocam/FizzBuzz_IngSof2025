import saludador from "./saludador.js";
test('Iteración 1: saluda con "Hola"', () => {
    expect(saludador()).toBe("Hola");
});
//iteracion 2: saluda con "Hola {nombre}" programa
test('Iteración 2: saluda con "Hola {nombre}"', () => {
    expect(saludador("María")).toBe("Hola María");
    expect(saludador("Pedro")).toBe("Hola Pedro");
});
//iteracion 3:Saludar de acuerdo a la hora del dia
test('Iteración 3: saluda de acuerdo a la hora', () => {
    expect(saludador("María", 9)).toBe("Buenos días María");
    expect(saludador("Pedro", 15)).toBe("Buenas tardes Pedro");
});
//iteracion 4: Saludar por genero 
test('Iteración 4: saluda de acuerdo al genero', () => {
    expect(saludador("María", 9, "F")).toBe("Buenos días María");
    expect(saludador("Pedro", 15, "M")).toBe("Buenas tardes Pedro");
});
