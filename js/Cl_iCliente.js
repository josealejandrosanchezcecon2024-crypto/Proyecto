export default class Cl_iCliente {
    leernombre() {
        return prompt("Introduzca su nombre");
    }
    leertipoVehiculo() {
        return prompt("Introduzca su tipo de vehículo: Moto, Paseo, Camioneta");
    }
    leercantidadKilometros() {
        return prompt("Introduzca la cantidad de kilómetros recorridos (numéricamente)");
    }
    reporteCliente(n, tV, cK, mT) {
        return `Nombre: ${n}
                <br>Tipo de vehículo: ${tV}
                <br>Kilómetros: ${cK}
                <br>Monto total a pagar: ${mT}$`;
    }
}
