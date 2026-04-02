export default class Cl_iCliente {
    leernombre() {
        return prompt ("introduzca su nombre")
    }
    leertipoVehiculo () {
        return prompt ("introduzca tV")
    }
    leercantidadKilometros () {
        return prompt ("introduzca la cantidad de kilometros que planea viajar (numerico/decimal)")
    }
    reporteCliente(n,tV,cK,kE,mA,mT) {
        return `Nombre del cliente: ${n}
        <br>tipo de vehiculo: ${tV}
        <br>cantidad de kilometros a recorrer: ${cK}
        <br> Kilometros por fuera de tarifa minima: ${kE}
        <br> Monto adicional por kilometros extra: ${mA.toFixed(2)}$
        <br> Monto total: ${mT.toFixed(2)}$
        `
    }
}
