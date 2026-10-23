const assert = require("assert");
const { registrarCliente, modificarCliente, listarClientes } = require("../src/clientes");
const { registrarServicio, listarServicios } = require("../src/Servicios");
const { registrarReserva, listarReservas, cancelarReserva } = require("../src/reservas");

// Clientes (Caleb)
const cliente = registrarCliente("Ana", "987654321", "ana@correo.com");
modificarCliente(cliente.id, { telefono: "912345678" });
assert.strictEqual(listarClientes()[0].telefono, "912345678");

// Servicios (Israel)
const servicio = registrarServicio("Corte de cabello", 25, 30);
assert.strictEqual(listarServicios()[0].duracionMinutos, 30);
assert.throws(() => registrarServicio("Mal", 10, 0));

// Reservas (Carlos)
const reserva = registrarReserva(cliente.id, servicio.id, "2026-11-10", "10:00");
assert.strictEqual(reserva.estado, "activa");
assert.strictEqual(listarReservas().length, 1);

// Cancelar (Carlos)
cancelarReserva(reserva.id);
assert.strictEqual(reserva.estado, "cancelada");
assert.throws(() => cancelarReserva(reserva.id));

console.log("Todas las pruebas pasaron");