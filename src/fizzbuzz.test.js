import { fizzbuzz } from "./FizzBuzz"
test("Devuelve '1' para el número 1", () => {
  expect(fizzbuzz(1)).toBe("1");
});

//Test multiplos de 3
test("Devuelve 'Fizz' para múltiplos de 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
  });
  
//Test multiplos de 5
test("Devuelve 'Buzz' para múltiplos de 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });
    