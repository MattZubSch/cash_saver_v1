// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

let container = document.getElementById("contenedor");
// cambio el código HTML interno
container.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>";

container.className = "container row";

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);

// //Obtenemos el nodo donde vamos a agregar los nuevos elementos
// let padre = document.getElementById("personas");
// //Array con la información a agregar
// let personas = ["HOMERO","MARGE", "BART", "LISA", "MAGGIE"];
// //Iteramos el array con for...of
// for (const persona of personas) {
//     //Creamos un nodo <li> y agregamos al padre en cada ciclo
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     padre.appendChild(li);
// }


// let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
// let contenedor = document.createElement("div");
// //Definimos el innerHTML del elemento con una plantilla de texto
// contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
//                         <p>  Producto: ${producto.nombre}</p>
//                         <b> $ ${producto.precio}</b>`;
// //Agregamos el contenedor creado al body
// document.body.appendChild(contenedor);

const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
