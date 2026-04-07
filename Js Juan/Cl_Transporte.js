export default class Cl_Transporte{
    constructor(nombre, tipoVehiculo, cantKm){
        this.nombre = nombre;
        this.tipoVehiculo = tipoVehiculo;
        this.cantKm = cantKm;
    }

    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }

    set tipoVehiculo(tpV){
        this._tipoVehiculo = +tpV;
    }
    get tipoVehiculo(){
        return this._tipoVehiculo;
    }

    set cantKm(cnt){
        this._cantKm = +cnt;
    }
    get cantKm(){
        return this._cantKm;
    }

    montoAdicional(){
        if(this.cantKm > 4.5)
            if(this.tipoVehiculo === 1){
                return (this.cantKm - 4.5) * 1.5 * 0.10;}
            else if(this.tipoVehiculo === 2){
                return (this.cantKm - 4.5) * 4 * 0.05;}
            else if(this.tipoVehiculo === 3){
                return (this.cantKm - 4.5) * 5.0 * 0.15;}
            if(this.cantKm <= 4.5){
                return 0;}
    }

    montoTotal(){
        switch(this.tipoVehiculo){
            case 1: return 1.5 + this.montoAdicional();
            case 2: return 4.0 + this.montoAdicional();
            case 3: return 5.0 + this.montoAdicional();
            default: return 0;}
        }
}