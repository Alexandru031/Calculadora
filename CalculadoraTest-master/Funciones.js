function sumar(numero1,numero2) {  // Creamos la función llamada suma y le añadimos dos parámetros
    var resultado;                 // Creamos una variable para almacenar más adelante el resultado

    if (numero1 === 0 || numero2 === 0) {
        throw new Error("No puede ser 0")
    }
    if (typeof numero1 === "string" || typeof numero2 === "string") {
        throw new Error("El numero es un string")
    }

    resultado = numero1 + numero2; // Sumamos los dos números pasados como parámetro y los almacenamos en la variable resultado    
    return resultado;              // Devolverá el resultado de la operación
}

function resta(numero1,numero2) {  // Creamos la función llamada suma y le añadimos dos parámetros
    var resultado;              // Creamos una variable para almacenar más adelante el resultado
    
    if (numero1 === 0 || numero2 === 0) {
        throw new Error("No puede ser 0")
    }
    if (typeof numero1 === "string" || typeof numero2 === "string") {
        throw new Error("El numero es un string")
    }

    resultado = numero1 - numero2; // Sumamos los dos números pasados como parámetro y los almacenamos en la variable resultado    
    return resultado;              // Devolverá el resultado de la operación
}

function mult(numero1,numero2) {  // Creamos la función llamada suma y le añadimos dos parámetros
    var resultado;                 // Creamos una variable para almacenar más adelante el resultado

    if (numero1 == 0 || numero2 == 0) {
        throw new Error("No puede ser 0")
    }
    if (typeof numero1 === "string" || typeof numero2 === "string") {
        throw new Error("El numero es un string")
    }

    resultado = numero1 * numero2; // Sumamos los dos números pasados como parámetro y los almacenamos en la variable resultado
    return resultado;              // Devolverá el resultado de la operación
}

function div(numero1,numero2) {  // Creamos la función llamada suma y le añadimos dos parámetros
    
    var resultado;                 // Creamos una variable para almacenar más adelante el resultado

    if (numero1 == 0 || numero2 == 0) {
        throw new Error("No puede ser 0")
    }
    if (typeof numero1 === "string" || typeof numero2 === "string") {
        throw new Error("El numero es un string")
    }

    resultado = numero1 / numero2; // Sumamos los dos números pasados como parámetro y los almacenamos en la variable resultado 
    if (resultado === 0) {
        throw new Error("No puede dividirse entre 0");
      }
    return resultado;              // Devolverá el resultado de la operación
   
}

module.exports = {
    sumar,
    resta,
    mult,
    div
  };


//console.log("La suma de 4 + 10 = "+ sumar(4, 20) ); 
//console.log("La resta de 4 - 10 = "+ resta(4, 20) ); 
//console.log("La multiplicación de 4 * 10 = "+ mult(4, 20) ); 
//console.log("La división de 40 / 10 = "+ div(40, 10) ); 


