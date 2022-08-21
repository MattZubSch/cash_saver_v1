do{
    nvoGasto(resumen);
    /*let razon = prompt("Ingrese el motivo del gasto: ");
    monto = prompt("Ingrese el monto gastado: ");*/
    //Comprobar que el valor ingresado es un numero
    if (Number(resumen.monto) == monto){
        monto = Number(monto);
        //Calcular si se excedio del limite de gasto
        if (gasto + monto < limite){
            //Sumar los valores a las variables mediante las funciones
            gasto = calcularGasto (gasto, monto);
            motivo = anidarValores (motivo, razon, monto);
        }
        else {
            //Reportar el exceso del limite
            alert("Se ha excedido el limite de gasto" + "\nSu saldo restante es: $" + (limite - gasto));
            alert("Resumen de Gastos:" + motivo + "\nGasto sin procesar:" + anidarValores("", razon, monto))
            break
        }
    }
    else{
        //Verificar si se ingreso un valor incorrecto
        if (monto != undefined) {
            alert(monto + "no es un valor correcto");
        }
        //Salir del programa, al no recibir valores
        else {
            alert("Saliendo del programa" + "\nResumen de Gastos:" + motivo)
            break
        }
    }
}while (true);