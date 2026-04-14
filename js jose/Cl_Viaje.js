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
        case "moto":
            return 1.50;
        case "depaseo":
            return 4.00;
        case "camioneta":
            return 5.00;
            default:
                return 0;
    }
}
    kmExtra() {
        return Math.max(0, this.cantidadKm - 4.5);
    }

    montoAdicional() {
        if (this.kmExtra() <= 0) {
            return 0;
        }

        if (this.tipoVehiculo === "moto") {
            return (this.montoPagar() * 0.10) * this.kmExtra();
        } else if (this.tipoVehiculo === "depaseo") {
            return (this.montoPagar() * 0.05) * this.kmExtra();
        } else if (this.tipoVehiculo === "camioneta") {
            return (this.montoPagar() * 0.15) * this.kmExtra();
        }

        return 0;
    }

    montoTotal () {
        return this.montoPagar() + this.montoAdicional();
    }
}
