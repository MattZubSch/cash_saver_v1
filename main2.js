// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

/*let container = document.getElementById("contenedor");
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
}*/

//Crear la clase "Gastos"
class Gasto {
    constructor(id, nombre, monto) {
        this.id = id;
        this.nombre = nombre;
        this.monto = monto;
    }
    elemCreado(){
        console.log("Se ha creado un objeto: Gasto" + "\nID: " + this.id + "\nRazon: " + this.nombre + "\nMonto: " + this.monto)
    }
}

function chequearLimite () {
    if (limite != 0) {
        mostrarLimite.remove();
        console.log("limite != 0")
    }
    console.log("limite == 0")
    respuestaLimite()
};

function respuestaLimite () {
    limite = prompt("Ingrese su limite de Gasto");
    console.log("Limite de Gasto: $" + limite)

    // let contenedor = document.getElementById("marcador");
    // let mostrarLimite = document.createElement("p");
    mostrarLimite.innerHTML = `<p>Limite Registrado!</p>
                            <b>$${limite}</b>`;
    contenedor.appendChild(mostrarLimite);
    // let marcador = document.getElementById("marcador");
    // .append(contenedor)
};

let limite = 0;
let contenedor = document.getElementById("marcadorLimite");
let mostrarLimite = document.createElement("p");

let botonLimite = document.getElementById("regisLimit");
botonLimite.addEventListener("click", chequearLimite);

let resumenMovAct = [];
let resumenMovTot = [];
let flagInicio = false;
let tablaResumen = document.getElementById("tabla1");
// let filaResumen;

function chequearResumen () {
    if (flagInicio == false) {
        flagInicio = true;
    } else {
        tablaResumen.remove()    
    }
    mostrarResumen()
}

function mostrarResumen () {
    let tablaResumen = document.getElementById("tabla1");
    for (const mov of resumenMovAct) {
        filaResumen = document.createElement("tr");
        filaResumen.innerHTML = `<td>${mov.id}</td>
                                <td>${mov.nombre}</td>
                                <td>${mov.monto}</td>`;
        tablaResumen.append(filaResumen);
        console.log(resumenMovAct.length);
    }
}

// function mostrarResumen () {

//     filaResumen = document.createElement("tr");
//     filaResumen.innerHTML = `<td>${mov.id}</td>
//                             <td>${mov.nombre}</td>
//                             <td>${mov.monto}</td>`;
//     tablaResumen.appendChild(filaResumen);
//     console.log(resumenMovAct.length);
// }


//funcion para crear nuevos gastos
function nvoGasto (e) {
    e.preventDefault();
    // let formulario = e.target;
    let id = resumenMovTot.length
    let inputNom = document.getElementById("nombreForm");
    let nom = inputNom.value;
    let inputMonto = document.getElementById("montoForm");
    let monto = inputMonto.value;
    // let id = resumenMovTot.length
    const gasto1 = new Gasto (id, nom, monto);
    resumenMovAct.push(gasto1);
    resumenMovTot.push(gasto1)
    gasto1.elemCreado();
    // mostrarResumen();
    // filaResumen = document.createElement("tr");
    // filaResumen.innerHTML = `<td>${id}</td>
    //                         <td>${nom}</td>
    //                         <td>${monto}</td>`;
    // tablaResumen.appendChild(filaResumen);
}

let formCarga = document.getElementById("formulario");
formCarga.addEventListener("submit", nvoGasto)



function borrar (){
    tablaResumen.remove()
    let tablaResumen = document.getElementById("tabla1");
}

let botonBorrar = document.getElementById("del");
botonBorrar.addEventListener("click", borrar);
let botonAct = document.getElementById("act");
botonAct.addEventListener("click", mostrarResumen);
/*
function respuestaLimite () {
    limite = prompt("Ingrese su limite de Gasto");
    console.log("Limite de Gasto: $" + limite)

    let contenedor = document.getElementById("marcador");
    let mostrarLimite = document.createElement("p");
    mostrarLimite.innerHTML = `<p>Limite Registrado!</p>
                            <p>$${limite}</p>`;
    contenedor.appendChild(mostrarLimite);
    // let marcador = document.getElementById("marcador");
    // .append(contenedor)
}


let botonLimite = document.getElementById("regisLimit");
botonLimite.addEventListener("click", respuestaLimite);


function respuestaLimite () {
    limite = prompt("Ingrese su limite de Gasto");
    console.log("Limite de Gasto: $" + limite)

    let contenedor = document.getElementById("marcador");
    let mostrarLimite = document.createElement("p");
    mostrarLimite.innerHTML = `<p>Limite Registrado!</p>
                            <b>$${limite}</b>`;
    contenedor.appendChild(mostrarLimite);

};

// let contenedorLimite = document.getElementById("marcador");
// let limite = 0;
let botonLimite = document.getElementById("regisLimit");
botonLimite.addEventListener("click", respuestaLimite());
*/