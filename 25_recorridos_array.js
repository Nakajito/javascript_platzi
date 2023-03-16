let articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

articulosFiltrados; // 0 : {nombre: 'Libro', costo: 320} 1 : {nombre: 'Teclado', costo: 500}

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
nombreArticulos; // ['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']

let encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

encuentraArticulo; //{nombre: 'Laptop', costo: 20000}

articulos.forEach(function (articulo) {
    console.log(articulo.nombre); 
});

let articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700; // true
});