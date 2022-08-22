//Crear la clase "Gastos"
class Gasto {
    constructor(nombre, monto) {
        //this.tipo = tipo;
        this.nombre = nombre;
        this.monto = monto;
    }
    elemCreado(){
        console.log("Se ha creado un objeto: Gasto" + "\nRazon: " + this.nombre + "\nMonto: " + this.monto)
    }
}

//funcion para crear nuevos gastos
function nvoGasto (collec) {
    let nom = prompt("Ingrese el motivo del gasto: ");
    let monto = parseInt(prompt("Ingrese el monto gastado: "));
    if (Number(monto) == monto) {
        const gasto1 = new Gasto (nom, monto);
        collec.push(gasto1);
        gasto1.elemCreado()
    }
    else {
        alert("No se pudo cargar el resultado, intente nuevamente")
    }
}

// Funcion para mostrar el resumen actual
function verResumen (array) {
    let index = 0;
    for (const movimientos of array) { 
        console.log(index + ")" + "\nRazon: " + movimientos.nombre + "\nMonto: " + movimientos.monto);
        index++;
    }
}

//Funcion para eliminar un resumen
function eliminarResumen (array) { 
    del = prompt("Ingrese el numero de orden del gasto que quiere eliminar")
    if (array.lenght < del) {
        alert("El numero ingresado no es valido")
    }else{
        array.splice (del, 1);
    }
}

// Funcion para eliminar un gasto
function modificarResumen (array) {
    opc = prompt("Para agregar un nuevo gasto, presione 1" + "\nPara eliminar un gasto, presione 2" + "\nPara salir, presione 0")
    while (opc != "0") { 
        switch (opc) {
            case "1":
                nvoGasto (array);
                verResumen (array);
                break
            case "2":
                eliminarResumen (array);
                verResumen (array);
                break
            default:
                alert("No se ha ingresado una opcion correcta")
                break
            }
        opc = prompt("Para agregar un nuevo gasto, presione 1" + "\nPara eliminar un gasto, presione 2" + "\nPara salir, presione 0");
    }
}

//funciones para procesar los gastos

function calcularGasto (valor1, valor2) {
    return Number(valor1) + Number(valor2);
} 

function procesarGastos (array1, array2, array3){
    for (const movimientos of array1) {
        if (gasto + movimientos.monto <= limite) {
            gasto = calcularGasto (gasto, movimientos.monto);
            array2.push(movimientos);
        }
        else{
            array3.push(movimientos);
        }
    }
    console.log("Gastos procesados dentro del Limite: ");
    for (const movimientos of array2) {
        console.log("Razon: " + movimientos.nombre + "\nMonto: $" + movimientos.monto)
    }
    console.log("Gastos que no pudieron procesarse:");
    for (const movimientos of array3) {
        console.log("Razon: " + movimientos.nombre + "\nMonto: $" + movimientos.monto)
    }
}

//funcion para mostrar los gastos en el HTML
function mostrarGastos (array) {
    for (const movimientos of array) {
        let container = document.createElement("div");
        //Definimos el innerHTML del elemento con una plantilla de texto
        container.innerHTML = `<h3>Producto: ${movimientos.nombre}</h3>
                                <b> $ ${movimientos.monto}</b>`;
        document.body.appendChild(container);
    }
}

// Funcion Menu
function menu () {
    return console.log("Opciones" + "\n1) Establecer Limite de Gasto" + "\n2) Ingresar nuevo Gasto" + "\n3) Ver/Emilinar Gastos" + "\n4) Procesar Gastos" + "\n5) Mostrar Gastos" + "\n0) Salir");
}

// Algortimo Menu de opciones
function menuOpciones () {

    alert("Bienvenido al sistema de Ahorro CASH SAVER" + "\nRecuerde abrir la consola para visualizar las opciones");
    
    menu()
    let opc = prompt("Seleccione la opción deseada");
    
    while (opc != "0") {
        switch (opc){
            case "1" :
                console.log("1) Establecer Limite de Gasto");
                //Definir Limite de Gasto
                limite = prompt("Ingrese su limite de Gasto");
                break
                case "2" :
                    console.log("2) Ingresar nuevo Gasto");
                    nvoGasto(resumen);
                    break
                    case "3" :
                        console.log("3) Ver/Emilinar Gastos");
                        verResumen (resumen);
                        modificarResumen (resumen);
                        break
                        case "4" :
                            if (limite == 0) { 
                                alert("No se ha ingresado el limite de Gasto. Por favor, ingreselo")
                            } else {
                                console.log("4) Procesar Gastos");
                                procesarGastos(resumen, resumenApr, resumenRech)
                            }
                            break
                            case "5" :
                                mostrarGastos (resumen);
                                break 
                                default :
                alert("No se ha ingresado una opcion correcta")
                break
            }
            menu()
            opc = prompt("Seleccione la opción deseada");
    }    
    alert("Saliendo")
}

//Definir Limite de Gasto
let limite = 0;
let gasto = 0;
const resumen = [];
let resumenApr = [];
let resumenRech = [];