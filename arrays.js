/*
Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

Los métodos de arrays son funcionalidades extra. Es semejante a las funciones, pero se accede mediante la notación punto array.metodo(argumentos).

Existen métodos mutables, es decir, que cambian el array original. Estos métodos son:

push -  agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

unshift - agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

pop -  extrae el elemento del final del array original.

shift - extrae el elemento del inicio del array original.

indexOf - muestra el índice del elemento especificado como argumento. Si el elemento no se encuentra en el array, el método devuelve el valor -1.

length - conocer la cantidad de elementos de un array.

*/

let frutas = ["manzana", "Plátano", "Cereza", "Fresa"];

frutas.push("Uvas"); //['manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']
frutas.unshift("kiwi"); //['kiwi', 'manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']
frutas.shift(); //['manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']
frutas.pop(); //['manzana', 'Plátano', 'Cereza', 'Fresa']
frutas.indexOf("Cereza") //2
