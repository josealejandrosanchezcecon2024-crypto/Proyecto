// Principal.js 
import Cl_Viaje from "./Cl_Viaje.js" ;
import Cl_iViaje from "./Cl_iViaje.js" ;

let iviaje = new Cl_iViaje() ,
    n = iviaje.leernombre() ,
    tV = iviaje.leertipoVehiculo() ,
    cK = iviaje.leercantidadKm() ,
    viaje = new Cl_Viaje(n,tV,cK) ;

let salida = document.getElementById("salida") ;
salida.innerHTML = iviaje.reporteViaje(viaje.nombre,viaje.tipoVehiculo,viaje.cantidadKm,viaje.montoAdicional(),viaje.montoPagar()) ;
