// Cl_Viaje.js clase modelo

export default class Cl_Viaje {
    constructor(nombre,tipoVehiculo,cantidadKm) {
        this.nombre = nombre ;
        this.tipoVehiculo = tipoVehiculo ;
        this.cantidadKm = cantidadKm ;
    }
set nombre (n) {
    this._nombre = n ;
}
get nombre () {
    return this._nombre ;
}
set tipoVehiculo (tV) {
    this._tipoVehiculo = tV ;
}
get tipoVehiculo () {
    return this._tipoVehiculo ;
}
set cantidadKm (cK) {
    this._cantidadKm = +cK ;
}
get cantidadKm () {
    return this._cantidadKm ;
}
montoPagar () {
     let tarifa;
    switch (this._tipoVehiculo) {
        case "1":
            tarifa = 1.50;
            break;
        case "2":
            tarifa = 4.00;
            break;
        case "3":
            tarifa = 5.00;
            break;
        default:
            tarifa = 0;
    }
    return this.cantidadKm * tarifa;
}
    }
}
montoAdicional () {
    if (this._tipoVehiculo === "1" && this.cantidadKm > 4.50)
        return this.montoPagar() * 0.10 ;
    else if (this._tipoVehiculo === "2" && this.cantidadKm > 4.50)
        return this.montoPagar() * 0.05 ;
    else if (this._tipoVehiculo === "3" && this.cantidadKm > 4.50)
        return this.montoPagar() * 0.15 ;
    else return 0 ;
}
montoTotal () {
    return this.montoPagar() + this.montoAdicional();
}
}
