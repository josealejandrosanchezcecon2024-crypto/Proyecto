// La empresa de Transporte “TaxiTour”, ofrece viajes en diferentes tipos de Vehículos: Moto, De Paseo, Camioneta. De cada cliente se conoce: Nombre, tipo de vehículo y cantidad de kms; además se sabe que el cliente paga una tarifa mínima por viaje hasta 4.5 kms.

export default class Cl_Cliente {  
    constructor(nombre, tipoVehiculo, cantidadKilometros) {
        this.nombre = nombre;
        this.tipoVehiculo = tipoVehiculo;
        this.cantidadKilometros = +cantidadKilometros;
    }
    set nombre (n) {
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
     set tipoVehiculo(t) {
        this.tipoVehiculo = t;
    }
     set cantidadKilometros (c) {
        this._cantidadKilometros = +c;
    }
    get cantidadKilometros(){
        return this._cantidadKilometros;
    }

        montoPagar() {
            switch (this.tipoVehiculo) {
                case "moto":
                    return 25.0;
                case "paseo":
                    return 40.0;
                case "camioneta":
                    return 60.0;
                default:
                    return 0;
            }
        }
 montoAdicional () {
    if (this.tipoVehiculo == "moto" && this.cantidadKilometros > 4.50)
        return this.monto() * 0.10;
    else if (this.tipoVehiculo == "paseo" && this.cantidadKilometros > 4.50)
        return this.monto() * 0.05;
    else if (this.tipoVehiculo == "camioneta" && this.cantidadKilometros > 4.50)
        return this.monto() * 0.15;
   }
   montoTotal () {
    return this.monto() + this.montoAdicional();
   }
}
