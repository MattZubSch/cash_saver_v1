// nodo de tipo Elemento, con la etiqueta P
/*let parrafo = document.createElement("p");

//HTML interno
parrafo.innerHTML = "<h2>¡Hola Mundo!</h2>";

//Añadimos el nodo como un hijo de body
document.body.append(parrafo);

document.getElementById("nombre").value;
document.getElementById("edad").value;*/

// let padre = document.getElementById("personas");

// let personas = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];

// for (const persona of personas) {
//     let li = document.createElement("li");
//     li.innerHTML = persona
//     // document.body.append(li)
//     document.body.appendChild(li);
// }


let producto = [{id: 1, nombre: "Arroz", precio: 120},
                {id: 2, nombre: "Fideos", precio: 180},
                {id: 3, nombre: "Tomate", precio: 80},
                {id: 4, nombre: "Harina", precio: 100}];


for (const items of producto) {
    let contenedor = document.createElement("div");
    // contenedor = document.querySelector(".colorRed");
    contenedor.innerHTML = `<h3 class="colorRed"> ID: ${items.id} </h3>
                            <p> Producto: ${items.nombre}</p>
                            <b> Precio: $ ${items.precio}</b>`;    
    document.body.appendChild(contenedor);
}
