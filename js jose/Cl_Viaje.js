// Cl_Viaje.js clase modelo

export default class Cl_Viaje {
    constructor(nombre,tipoVehiculo,cantidadKm) {
        this.nombre = nombre ;
        this.tipoVehiculo = tipoVehiculo ;
        this.cantidadKm = +cantidadKm ;
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
    switch (this._tipoVehiculo) {
        case "1":
            return 1.50;
        case "2":
            return 4.00;
        case "3":
            return 5.00;
            default:
                return 0;
    }
}
montoAdicional () {
  if (this.cantidadKm <= 4.50) return 0;
    let kmExtras = this.cantidadKm - 4.50;
    let porcentaje = 0;
    if (this._tipoVehiculo === "1") porcentaje = 0.10;
    else if (this._tipoVehiculo === "2") porcentaje = 0.05;
    else if (this._tipoVehiculo === "3") porcentaje = 0.15;
    return Math.round(kmExtras * this.montoPagar() * porcentaje * 100) / 100;
}
montoTotal () {
    return this.montoPagar() + this.montoAdicional();
}
}
