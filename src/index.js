const { registrarCliente, modificarCliente, listarClientes } = require("./clientes");
const { registrarServicio, listarServicios } = require("./Servicios");
const { registrarReserva, listarReservas, cancelarReserva } = require("./reservas");

const ana = registrarCliente("Ana Torres", "987654321", "ana@correo.com");
modificarCliente(ana.id, { telefono: "912345678" });
console.log("Clientes:", listarClientes());

const corte = registrarServicio("Corte de cabello", 25, 30);
registrarServicio("Manicure", 30, 45);
console.log("Servicios:", listarServicios());

const reserva = registrarReserva(ana.id, corte.id, "2026-11-10", "10:00");
console.log("Reserva registrada:", reserva);

cancelarReserva(reserva.id);
console.log("Reservas:", listarReservas());