/**
    Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.
    Necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.
 */

 function Auto(brand, model, year){
    this.brand = brand
    this.model = model
    this.year = year
    this.detalle = function () {
        console.log(`Auto ${this.model} del ${this.year}.`)
    }
}

let autoNuevo = new Auto("Tesla", "Model 3", 2024);
let autoNuevo2 = new Auto("Nissan", "kicks", 2017);
let autoNuevo3 = new Auto("Kia", "Sportage", 2015);

autoNuevo; // brand: 'Tesla', model: 'Model 3', year: 2024
autoNuevo2; // brand: 'Nissan', model: 'kicks', year: 2017
autoNuevo3; // brand: 'Kia', model: 'Sportage', year: 2015

//Creamos la funcion constructora
function Auto(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
//inicializamos el aray vacio para almacenar los datos
let autos = [];

//preguntamos al usuario la cantidad de registros que desea hacer
let cantidadAutos = prompt ("Cantidad de autos a registrar: ");

//ejecutamos el bucle la cantidad de veces que el usuarioindicó
for (let i = 0; i < cantidadAutos; i++) {
    let brand = prompt ("Marca: "); //asignamos el valor de marca
    let model = prompt ("modelo: "); //asignamos el valor de modelo
    let year = prompt ("año: "); //asignamos el valor del año

    let nuevoAuto = new Auto (brand, model, year); // instanciamos 
    autos.push(nuevoAuto); // agregamos los valores al array
}