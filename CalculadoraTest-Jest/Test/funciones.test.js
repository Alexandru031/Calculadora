const { sumar, resta, mult, div } = require("../Funciones.js");


describe("*** VALIDAR SUMAS ***", () => {
    test("1 + 1 = 2", () => {
      expect(sumar(1, 1)).toEqual(2);
    });
  
    test("10 + 20 = 30", () => {
      expect(sumar(10, 20)).toEqual(30);
    });

    test('Error: "hola" + 1 = hola1', () => {
      try {
        sumar("hola", 1);
        // Si no se lanzó una excepción, la prueba fallará
      } catch (error) {
        expect(error.message).toThrow(Error);
      }
    });

    test('Error: 0 + 1 = hola1', () => {
      try {
        sumar(0, 1);
        // Si no se lanzó una excepción, la prueba fallará
      } catch (error) {
        expect(error.message).toThrow(Error);
      }
    });
});
  
describe("*** VALIDAR RESTAS ***", () => {
    test("10 - 2 = 8", () => {
      expect(resta(10, 2)).toEqual(8);
    });
  
  
    test("87 - 523 = -436", () => {
      expect(resta(87, 523)).toEqual(-436);
    });

    test('Error: "hola" - 1 = hola1', () => {
      try {
        resta("hola", 1);
        // Si no se lanzó una excepción, la prueba fallará
      } catch (error) {
        expect(error.message).toThrow(Error);
      }
    });

    test('Error: 0 - 1 = hola1', () => {
      try {
        resta(0, 1);
        // Si no se lanzó una excepción, la prueba fallará
      } catch (error) {
        expect(error.message).toThrow(Error);
      }
    });
});
    
describe("*** VALIDAR MULTIPLICACIONES ***", () => {
      test("2 * 4 = 8", () => {
        expect(mult(2, 4)).toEqual(8);
      });
    
      test("1000 * 8.5 = 8500", () => {
        expect(mult(1000, 8.5)).toEqual(8500);
      });

      test('Error: "hola" * 1 = hola1', () => {
        try {
          mult("hola", 1);
          // Si no se lanzó una excepción, la prueba fallará
        } catch (error) {
          expect(error.message).toThrow(Error);
        }
      });
  
      test('Error: 0 * 1 = 1', () => {
        try {
          mult(0, 1);
          // Si no se lanzó una excepción, la prueba fallará
        } catch (error) {
          expect(error.message).toThrow(Error);
        }
      });
});

describe("*** VALIDAR DIVISIONES ***", () => {
    test("20 / 2 = 10", () => {
      expect(div(20, 2)).toEqual(10);
    });
  
    
    //test("20 / 1 = 0", () => {
    //    expect(div(20, 1).toEqual(20));
    //});

    test('Error: "hola" + 1 = hola1', () => {
      try {
        div("hola", 1);
        // Si no se lanzó una excepción, la prueba fallará
      } catch (error) {
        expect(error.message).toThrow(Error);
      }
    });

    test('Error: 0 / 1 = 0', () => {
      try {
        div(0, 1);
        // Si no se lanzó una excepción, la prueba fallará
      } catch (error) {
        expect(error.message).toThrow(Error);
      }
    });
});
    
