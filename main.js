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
//inicializar variables globales
let resumenMovAct = [];
let resumenMovTot = [];
let flagInicio = false;
let tablaResumen = document.getElementById("tabla1");

//Detectar evento para iniciar la carga de movimientos
let btnIng = document.getElementById("btnIngresarMov");
btnIng.onclick = () =>{crearPanelIng()}
let btnIngSec = document.getElementById("btnIngSecundario");
btnIngSec.onclick = () =>{crearPanelIng()}

//Mostrar (crear) panel para ingresar datos
function crearPanelIng() {
    window.location.href = '#nvoMov'
    let contenedorCarga = document.getElementById("formDeCarga")
    contenedorCarga.innerHTML = `<form action="" id="formularioCarga">
                                <input class="panelIng" type="text" placeholder="Nombre de la Transaccion" id="nombreForm">
                                <input class="panelIng" type="number" placeholder="Monto de la transaccion" id="montoForm">
                                <input class="botonIng" type="submit" value="Enviar">
                            </form>`
    let formCarga = document.getElementById("formularioCarga");
    formCarga.addEventListener("submit", nvoGasto)
}

//funcion para crear nuevos gastos
function nvoGasto (e) {
    e.preventDefault();
    // let formulario = e.target;
    let id = resumenMovTot.length
    let inputNom = document.getElementById("nombreForm");
    let nom = inputNom.value;
    let inputMonto = document.getElementById("montoForm");
    let monto = inputMonto.value;
    const gasto1 = new Gasto (id, nom, monto);
    resumenMovAct.push(gasto1);
    resumenMovTot.push(gasto1)
    gasto1.elemCreado();
    mostrarResumen();
    deshacerPanelIng()
    window.location.href = '#resumen';
}

//Recargar el resumen con los movimientos actualizados
function mostrarResumen () {
    let tablaResumen = document.getElementById("tabla1");
    tablaResumen.innerHTML = "";  
    for (const mov of resumenMovAct) {
        filaResumen = document.createElement("tr");
        filaResumen.innerHTML = `<td>${mov.id}</td>
                                <td>${mov.nombre}</td>
                                <td>${mov.monto}</td>`;
        tablaResumen.append(filaResumen);
        console.log(resumenMovAct.length);
    }
}

//Eliminar el panel para ingresar movimientos
function deshacerPanelIng(){
    let contenedorCarga = document.getElementById("formDeCarga")
    contenedorCarga.innerHTML = "";
}

//Detectar evento para crear el panel de modificacion
let btnMod = document.getElementById("btnModificarMov");
btnMod.onclick = () =>{crearPanelMod()}
let btnModSec = document.getElementById("btnModSecundario");
btnModSec.onclick = () =>{crearPanelMod()}
let flagIdMod = -1;

//crear el panel de modificacion
function crearPanelMod() {
    window.location.href = '#modMov'
    let contenedorMod = document.getElementById("formMod")
    contenedorMod.innerHTML = "";
    contenedorMod.innerHTML = `<input type="number" class="panelMod" id="findIdMod" placeholder="Buscar por ID">`;
    let inputModId = document.getElementById("findIdMod");
    inputModId.onchange =  () => {filtResultadosMod(inputModId.value)}
}


//Buscar el objeto por su Id y mostrarlo en una tabla, habilitando el panel de modificacion
function filtResultadosMod(valor){
    flagIdMod = valor;
    busqueda = resumenMovAct.find((el) => el.id === Number(valor));
    let panelMod = document.getElementById("formularioMod");
    panelMod.innerHTML = "";
    let tableTopMod = document.getElementById("tableModTop");
    tableTopMod.innerHTML = "";
    let tablaResultadosMod = document.getElementById("tabla2");
    tablaResultadosMod.innerHTML = ""; 
    let contenedorMod = document.getElementById("formMod")
    contenedorMod.innerHTML = ""
    if (resumenMovAct.includes(busqueda)) {
        let tableTopMod = document.getElementById("tableModTop");
        let filaTopMod = document.createElement("tr");
        filaTopMod.innerHTML = "";
        filaTopMod.innerHTML = `<td>ID</td>
                            <td>NOMBRE</td>
                            <td>MONTO</td>`;
        tableTopMod.append(filaTopMod);
        let filaResultado = document.createElement("tr");
        filaResultado.innerHTML = `<td>${busqueda.id}</td>
                                    <td>${busqueda.nombre}</td>
                                    <td>${busqueda.monto}</td>`;
        tablaResultadosMod.appendChild(filaResultado);
        modificarMov(busqueda)
    } else {
        let contenedorMod = document.getElementById("formMod")
        contenedorMod.innerHTML = `<p class="text-center">El valor Ingresado no existe o no es valido</p>`;
    }
    
}


//panel para modificar el movimiento
function modificarMov(mov) {
    window.location.href = '#modMov';
    let panelMod = document.getElementById("formularioMod");
    panelMod.innerHTML = `<input class="panelMod" type="text" placeholder="${mov.nombre}" id="nombreMod">
                            <input class="panelMod" type="number" placeholder="${mov.monto}"id="montoMod">
                            <input class="botonMod" type="submit" value="Enviar">`;
}

//detectar formulario para modificar el movimiento
let panelMod = document.getElementById("formularioMod");
panelMod.addEventListener("submit", aplicarMod);
let busqueda = -1;

//modificar el objeto del array, actualizar el resumen y eliminar el panel
function aplicarMod(e) {
    e.preventDefault();
    let inputNom = document.getElementById("nombreMod");
    let nom = inputNom.value;
    let inputMonto = document.getElementById("montoMod");
    let monto = inputMonto.value;
    resumenMovTot[flagIdMod].nombre = nom;
    resumenMovTot[flagIdMod].monto = monto;
    mostrarResumen();
    deshacerPanelMod ();
    window.location.href = '#resumen';
}

//borrar el panel para modificar movimientos
function deshacerPanelMod () {
    let contenedorMod = document.getElementById("formMod")
    contenedorMod.innerHTML = "";
    let panelMod = document.getElementById("formularioMod");
    panelMod.innerHTML = "";
    let tablaResultadosMod = document.getElementById("tabla2");
    tablaResultadosMod.innerHTML = "";
    let tableTopMod = document.getElementById("tableModTop");
    tableTopMod.innerHTML = "";
}

//Detectar evento para crear el panel de eliminacion
let btnDel = document.getElementById("btnEliminarMov");
btnDel.onclick = () =>{crearPanelDel()}
let btnDelSec = document.getElementById("btnDelSecundario");
btnDelSec.onclick = () =>{crearPanelDel()}
flagIdDel = -1;

//crear panel de Eliminacion de movimientos
function crearPanelDel() {
    window.location.href = '#delMov'
    let contenedorDel = document.getElementById("formDel")
    contenedorDel.innerHTML = "";
    let panelDel = document.createElement("div");
    panelDel.innerHTML = `<input type="number" class="panelDel" id="findIdDel" placeholder="Buscar por ID">`
    contenedorDel.append(panelDel);
    let inputDelId = document.getElementById("findIdDel");
    inputDelId.onchange =  () => {filtResultadosDel(inputDelId.value)}
}



//Encontrar el movimiento y mostrarlo en una tabla
function filtResultadosDel(valor){
    busqueda = resumenMovAct.find((el) => el.id === Number(valor));
    let panelDel = document.getElementById("formularioDel");
    panelDel.innerHTML = "";
    let tableTopDel = document.getElementById("tableDelTop");
    tableTopDel.innerHTML = "";
    let tablaResultadosDel = document.getElementById("tabla3");
    tablaResultadosDel.innerHTML = ""; 
    let contenedorDel = document.getElementById("formDel")
        contenedorDel.innerHTML = "";
    if (resumenMovAct.includes(busqueda)) {
        let tableTopDel = document.getElementById("tableDelTop");
        let filaTopDel = document.createElement("tr");
        filaTopDel.innerHTML = "";
        filaTopDel.innerHTML = `<td>ID</td>
                            <td>NOMBRE</td>
                            <td>MONTO</td>`;
        tableTopDel.append(filaTopDel);
        let filaResultado = document.createElement("tr");
        filaResultado.innerHTML = `<td>${busqueda.id}</td>
                                    <td>${busqueda.nombre}</td>
                                    <td>${busqueda.monto}</td>`;
        tablaResultadosDel.appendChild(filaResultado);
        confirmarEliminar(busqueda)
    } else {
        let contenedorDel = document.getElementById("formDel")
        contenedorDel.innerHTML = `<p class="text-center">El valor Ingresado no existe o no es valido</p>`;
    }
    
}

//Confirmar la eliminacion del movimiento
function confirmarEliminar () {
    window.location.href = '#formularioDel';
    let panelDel = document.getElementById("formularioDel");
    panelDel.innerHTML  = "";
    panelDel.innerHTML  = `<p>¿Eliminar?</p>
                            <button id="btnSi">SI</button>
                            <button id="btnNo">NO</button>`;
    let botonEliminar = document.getElementById("btnSi")
    botonEliminar.onclick = () =>{eliminarMov()} 
    let botonNoEliminar = document.getElementById("btnNo")
    botonNoEliminar.onclick = () =>{noEliminar()}
}

//Eliminar objeto del array, actualizar resumen y borrar panel de eliminacion
function eliminarMov () {
    resumenMovAct.splice(flagIdDel, 1);
    mostrarResumen();
    deshacerPanelDel();
    window.location.href = '#resumen';
}
//borrar solamente panel de eliminacion
function noEliminar(){
    deshacerPanelDel();
}

//borrar panel de eliminacion
function deshacerPanelDel() {
    let panelDel = document.getElementById("formularioDel");
    panelDel.innerHTML = "";
    let tableTopDel = document.getElementById("tableDelTop");
    tableTopDel.innerHTML = "";
    let tablaResultadosDel = document.getElementById("tabla3");
    tablaResultadosDel.innerHTML = ""; 
    let contenedorDel = document.getElementById("formDel")
    contenedorDel.innerHTML = "";
}





