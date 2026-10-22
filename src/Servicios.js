const servicios = [];

// Registra un servicio con precio y duracion en minutos
function registrarServicio(nombre, precio, duracionMinutos) {
  if (!nombre) {
    throw new Error("El nombre es obligatorio");
  }
  if (precio <= 0) {
    throw new Error("El precio debe ser mayor a 0");
    
  }
   if (duracionMinutos <= 0) {
    throw new Error("La duracion debe ser mayor a 0");
  }

  const servicio = { id: servicios.length + 1, nombre, precio, duracionMinutos };
  servicios.push(servicio);
  return servicio;
}

// Busca un servicio por su id (lo usara el modulo de reservas)
function buscarServicio(id) {
  return servicios.find((s) => s.id === id);
}

// Devuelve todos los servicios
function listarServicios() {
  return servicios;
}

module.exports = { registrarServicio, buscarServicio, listarServicios };
