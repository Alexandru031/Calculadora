const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const { it, describe } = require('mocha');
const { sumar, resta, mult, div } = require("../Funciones.js");

/* ASSERT */

describe("--- ASSERT ---", () => {
  describe("*** VALIDAR SUMAS ***", () => {
    it("1 + 1 = 2", () => {
      assert.equal(sumar(1, 1), "2");
    });
  
    it("10 + 20 = 30", () => {
      assert.equal(sumar(10, 20), "30");
    });

    it("10 + 20 = 30", () => {
      assert.typeOf(sumar(10, 20), "number", 'El tipo de datos es number');
    });
});
  
describe("*** VALIDAR RESTAS ***", () => {
    it("La resta 8 es menor que 10", () => {
      assert.isBelow(resta(10, 2), 10); /* assert.isBelow: Lo que hace es comparar si el numero es menor que el resultado */
    });

    it("14 - 10 = 4", () => {
      assert.equal(resta(14, 10), 4);
    })
  
    it("87 - 523 = -436", () => {
      assert.equal(resta(87, 523), -436);
    });
});
    
describe("*** VALIDAR MULTIPLICACIONES ***", () => {
      it("2 * 4 = 8", () => {
        assert.equal(mult(2, 4), 8);
      });
    
      it("1000 * 8.5 = 8500", () => {
        assert.equal(mult(1000, 8.5), 8500);
      });
});

describe("*** VALIDAR DIVISIONES ***", () => {
    it("20 / 2 = 10", () => {
      assert.equal(div(20, 2), 10);
    });
  
    
    //test("20 / 0 = 0", () => {
    //    expect(div(99, 0).toEqual(0));
    //});
});
})

/* EXPECT */

describe("--- EXPECT ---", () => {
  describe("*** VALIDAR SUMAS ***", () => {
    it("1 + 1 = 2 (equals)", () => {
      expect(sumar(1, 1)).to.equal(2);
    });
  
    it("10 + 20 = 30 (equals, diferente tipo)", () => {
      expect(sumar(10, 20)).to.equal("30"); 
      /* Si nos damos cuenta, si ponemos como una cadena de texto, va salir 
      error porque el resultado que esperamos, es diferente tipo */
    });

    it("10 + 20 = 30 (type number)", () => {
      expect(sumar(10, 30)).to.be.a("number")
    });
  });
});

/* SHOULD */

describe("--- SHOULD ---", () => {
  describe("*** VALIDAR SUMAS ***", () => {
    it("1 + 1 = 2 (equals)", () => {
      sumar(1, 1).should.equal(2)
    });
  
    it("10 + 20 = 30 (equals, diferente tipo)", () => {
      sumar(10,20).should.equal("30"); 
      /* Si nos damos cuenta, si ponemos como una cadena de texto, va salir 
      error porque el resultado que esperamos, es diferente tipo */
    });

    it("10 + 20 = 30 (type number)", () => {
      sumar(10,20).should.be.a("number")
    });
  });
});