// La empresa de Transporte “TaxiTour”, ofrece viajes en diferentes tipos de Vehículos: Moto, De Paseo, Camioneta. De cada cliente se conoce: Nombre, tipo de vehículo y cantidad de kms; además se sabe que el cliente paga una tarifa mínima por viaje hasta 4.5 kms.

import Cl_Cliente from "./Cl_Cliente.js";
import Cl_iCliente from "./Cl_iCliente.js";

let icliente = new Cl_iCliente (),
n = icliente.leernombre(),
t = icliente.leertipoVehiculo(),
c = icliente.leercantidadKilometros(),
cliente = new Cl_Cliente(n, t, c);

let salida = document.getElementById ("salida");
salida.innerHTML =
 icliente.reporteCliente(
    cliente.nombre, 
    cliente.tipoVehiculo, 
    cliente.cantidadKilometros, 
    cliente.kmsExtra,           
    cliente.montoAdicional(),   
    cliente.montoTotal()
 );
