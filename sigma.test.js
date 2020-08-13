const sigma = require("./sigma").sigma;

// 'describe' es una nueva suite, recibe 2 parámetros (string para el desarrollador y una función)
describe("`sigma(num)`", () => {
	describe("Cuando nos dan un número como argumento", () => {
		it("retorna la suma de 1 a n cuando nos dan un número positivo", () => {
			const result = sigma(5);
			expect(result).toBe(5);
		});
	});
	describe("cuando nos dan un no-número como argumento", () => {
		it("throws a TypeError when given `undefined`", () => {
			expect(() => {
				sigma(undefined);
			}).toThrow(TypeError);
		});
	});
});
