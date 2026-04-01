// Cl_iViajes clase interfaz
export default class Cl_iViaje {
    leernombre () {
        return prompt("Ingrese su nombre: ") ;
    }
    leertipoVehiculo () {
        return prompt("Ingrese su tipo de vehículo: ") ;
    }
    leercantidadKm () {
        return prompt("Ingrese la cantidad de kilómetros: ");
    }
    reporteViaje(n,tV,ck,mA,mT) {
        return `Nombre: ${n}
        <br> Tipo de Vehículo: ${tV}
        <br> Cantidad de Km: ${ck}
        <br> Monto por Km Adicional: $${(+mA).toFixed(2)}
        <br> Monto Total a Pagar: $${(+mT).toFixed(2)}`;  
    }
}
