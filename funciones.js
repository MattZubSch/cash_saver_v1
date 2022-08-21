//Crear la clase "Gastos"
class Gasto {
    constructor(nombre, monto) {
        //this.tipo = tipo;
        this.nombre = nombre;
        this.monto = monto;
    }
    prueba(){
        console.log("Razon: " + this.nombre + "\nMonto: " + this.monto)
    }
}

const resumen = [];

//funcion para crear nuevos gastos
function nvoGasto (collec) {
    let nom = prompt("Ingrese el motivo del gasto: ");
    let monto = parseInt(prompt("Ingrese el monto gastado: "));
    if (Number(monto) == monto) {
        const gasto1 = new Gasto (nom, monto);
        collec.push(gasto1);
        // alert(monto + " no es un valor correcto. Intente nuevamente");
        // let monto = prompt("Ingrese el monto gastado: ");
    }
    else {
        alert("No se pudo cargar el resultado, intente nuevamente")
    }
}


//Crear las funciones a utilizar

function calcularGasto (valor1, valor2) {
    return Number(valor1) + Number(valor2);
} 

function procesarGastos (array1, array2){
    for (const Gasto of resumen) {
        if (gasto + Gasto.monto < limite) {
            gasto = calcularGasto (gasto, Gasto.monto);
            array1.push(Gasto);
        }
        else{
            array2.push(Gasto);
        }
    }
}

