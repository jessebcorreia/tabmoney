const calculadora = require("../../models/calculadora.js");

test("somar 2+2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("tentar somar uma string com número deveria retornar erro", () => {
  const resultado = calculadora.somar("string", 2);
  expect(resultado).toBe("Erro");
});
