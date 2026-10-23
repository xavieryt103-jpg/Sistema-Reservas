const clientes = [];

// Registra un cliente. Nombre y telefono son obligatorios.
function registrarCliente(nombre, telefono, correo) {
  if (!nombre || !telefono) {
    throw new Error("Nombre y telefono son obligatorios");
  }
  const cliente = { id: clientes.length + 1, nombre, telefono, correo: correo || "" };
  clientes.push(cliente);
  return cliente;
}

// Busca un cliente por su id (lo usara el modulo de reservas)
function buscarCliente(id) {
  return clientes.find((c) => c.id === id);
}

// Modifica los datos de un cliente existente
function modificarCliente(id, datos) {
  const cliente = buscarCliente(id);
  if (!cliente) {
    throw new Error("Cliente no existe");
  }
  if (datos.nombre) cliente.nombre = datos.nombre;
  if (datos.telefono) cliente.telefono = datos.telefono;
  if (datos.correo) cliente.correo = datos.correo;
  return cliente;
}

// Devuelve todos los clientes
function listarClientes() {
  return clientes;
}

module.exports = { registrarCliente, buscarCliente, modificarCliente, listarClientes };
