/*
Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

Los atributos son las variables y los métodos son las funciones propias de cada objeto.

*** Acceder a los valores mediante corchetes []:
Indicamos entre corchetes la propiedad del objeto entre comillas.

objeto["propiedad"]

*** Acceder a los valores mediante punto . :
Indicamos con un punto la propiedad del objeto. Si existen espacios, la única forma de acceder a esa propiedad es mediante la notación de corchetes.

objeto.propiedad

*/

let miAuto = {
    marca : "Audi",
    modelo : "A8",
    año : 2023,
    detalleDelAuto : function(){
        console.log(`Modelo: ${this.modelo} - ${this.año}`);
    }
}

miAuto; //{marca: 'Audi', modelo: 'A8', año: 2023}
miAuto.marca; //Audi
miAuto.modelo; //A8
miAuto.año; //2023
miAuto.detalleDelAuto() //Modelo: A8 - 2023