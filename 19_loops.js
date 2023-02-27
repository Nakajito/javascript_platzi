/*

La condición consta de tres partes:

Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.
Cada una de las partes debe estar separada por un punto y coma ( ;).

for (condición) {
    // Bloque de código
}

*/
let nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

for(let i = 0; i < nombres.length; i++){
    console.log( nombres[i] )
}


/*El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array.

La estructura del ciclo for ... of es la siguiente:

for ( let elemento of array){
    //Bloque de código
}

La variable elemento es la referencia a cada uno de los elementos del array. Este puede tener cualquier nombre, por eso se inicia con var, debido a que es una variable como el índice i en el bucle for.

*/
let array = [5, 4, 3, 2, 1]

for (let elemento of array) {
  console.log(elemento) // 5 4 3 2 1
}

/*
El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.

*/
let numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (let number of numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]

/*
for - recorre un bloque de código varias veces

for/in - recorre las propiedades de un objeto

for/of - recorre los valores de un objeto iterable

while - recorre un bloque de código mientras se cumple una condición específica

do/while - también recorre un bloque de código mientras se cumple una condición específica
 */

