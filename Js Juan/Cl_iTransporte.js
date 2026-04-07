export default class Cl_iTransporte{
    
    leerNombre(){
        return prompt("ingrese el nombre del cliente: ")
    }

    leerTipoVehiculo(){
        return prompt("ingrese el tipo de vehiculos (1.Moto, 2.De Paseo, 3.Camioneta.): ")
    }
    leerCantKm(){
        return prompt("ingrese la cantidad de kilometros del cliente: ")
    }

    reporteTransporte(n, ckm, mP){
        return `
        Nombre: ${n}
        <br> Monto kilometro adicional: $${ckm.toFixed(3)}
        <br> Monto a pagar: $${mP.toFixed(3)}`;
    }
}