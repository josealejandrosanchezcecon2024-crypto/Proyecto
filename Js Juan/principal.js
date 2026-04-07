import Cl_iTransporte from "./Cl_iTransporte.js";
import Cl_Transporte from "./Cl_Transporte.js";

let itransporte = new Cl_iTransporte(),

    n = itransporte.leerNombre(),
    tpV = itransporte.leerTipoVehiculo(),
    cnt = itransporte.leerCantKm(),

    transporte = new Cl_Transporte(n, tpV, cnt),

    salida = document.getElementById("salida")

    salida.innerHTML = itransporte.reporteTransporte(transporte.nombre, transporte.montoAdicional(), transporte.montoTotal());