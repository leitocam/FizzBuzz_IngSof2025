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
//iteracción 5:Saludar por edad 

test('Iteración 5: saluda de acuerdo a la edad', () => {
    expect(saludador("María", 9, "F", 35)).toBe("Buenos días Sra. María");
    expect(saludador("Pedro", 15, "M", 40)).toBe("Buenas tardes Sr. Pedro");
    expect(saludador("Ana", 10, "F", 25)).toBe("Buenos días Ana");
});

//iteración 6: Saludar en espanol o en inglés
test('Iteración 6: saluda en español o en inglés', () => {
    expect(saludador("María", 9, "F", 35, "ES")).toBe("Buenos días Sra. María");
    expect(saludador("John", 15, "M", 40, "EN")).toBe("Good afternoon Mr. John");
    expect(saludador("Ana", 10, "F", 25, "ES")).toBe("Buenos días Ana");
    expect(saludador("Alice", 20, "F", 28, "EN")).toBe("Good evening Alice");
});
