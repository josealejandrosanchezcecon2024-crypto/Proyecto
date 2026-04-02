export default class Cl_cliente {
    constructor (nombre,tipoVehiculo,CantidadKilometros) {
        this.nombre = nombre;
        this.tipoVehiculo = tipoVehiculo;
        this.CantidadKilometros = CantidadKilometros
    }
     set nombre (n) { 
        this._nombre = n; 
    }
    get nombre () {
         return this._nombre; 
        }
    
    set tipoVehiculo (tV) {
        this._tipoVehiculo = tV.toLowerCase(); // Aquí se convierte "Moto" en "moto"
    }
    get tipoVehiculo () {
        return this._tipoVehiculo;
    }
    
    set cantidadKilometros (cK) {
        this._cantidadKilometros = +cK;
    }
    get cantidadKilometros () {
        return this._cantidadKilometros;
    }

    montoPagar() {
        switch (this.tipoVehiculo) {
      case "moto": return 1.5; 
      case "paseo": return 4.0;
      case "camioneta": return 5.0;
      default: return 0;    
        }
    }
    montoAdicional() {
        if (this.tipoVehiculo == "moto" || "Moto" && this.CantidadKilometros > 4.5)
            return (this.montoPagar * 0.10) * this.kmExtra;
        else if (this.tipoVehiculo == "paseo"|| "Paseo" && this.CantidadKilometros > 4.5)
            return (this.montoPagar * 0.05) * this.kmExtra;
        else if (this.tipoVehiculo == "camioneta" || "Camioneta" && this.CantidadKilometros > 4.5)
            return (this.montoPagar * 0.15) * this.kmExtra;
        else return 0;

    }
    montoTotal() {
        return this.montoPagar() + this.montoAdicional();
    }
}
