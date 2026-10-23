const { buscarCliente } = require("./clientes");
const { buscarServicio } = require("./Servicios");

const reservas = [];

// Registra una reserva para un cliente y un servicio, con fecha y hora
function registrarReserva(clienteId, servicioId, fecha, hora) {
  const cliente = buscarCliente(clienteId);
  if (!cliente) {
    throw new Error("Cliente no existe");
  }

  const servicio = buscarServicio(servicioId);
  if (!servicio) {
    throw new Error("Servicio no existe");
  }

  if (!fecha || !hora) {
    throw new Error("Fecha y hora son obligatorias");
  }

  const reserva = {
    id: reservas.length + 1,
    clienteId,
    servicioId,
    fecha,
    hora,
    estado: "activa"
  };

  reservas.push(reserva);
  return reserva;
}

// Devuelve todas las reservas registradas
function listarReservas() {
  return reservas;
}

// Cancela una reserva activa
function cancelarReserva(id) {
  const reserva = reservas.find((r) => r.id === id);
  if (!reserva) {
    throw new Error("Reserva no existe");
  }
  if (reserva.estado === "cancelada") {
    throw new Error("La reserva ya esta cancelada");
  }
  reserva.estado = "cancelada";
  return reserva;
}

module.exports = { registrarReserva, listarReservas, cancelarReserva };
