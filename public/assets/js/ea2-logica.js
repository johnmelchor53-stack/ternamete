export function filtrarServicios(lista, categoria) {
  if (!Array.isArray(lista)) return [];
  if (categoria === 'Todas') return [...lista];

  return lista.filter((servicio) => servicio?.categoria === categoria);
}

export function validarUrgencia(prioridad, motivo) {
  if (prioridad !== 'alta') return '';

  if (typeof motivo !== 'string' || motivo.trim().length < 15) {
    return 'Para prioridad alta, escribe una justificación de al menos 15 caracteres.';
  }

  return '';
}

export function cambiarEstado(solicitudes, id, nuevoEstado, actor, auditoria) {
  const estadosValidos = ['Pendiente', 'En proceso', 'Resuelto', 'Cerrado/Cancelado'];

  if (!Array.isArray(solicitudes) || !Array.isArray(auditoria)) {
    return false;
  }

  if (actor?.rol !== 'tecnico') return false;
  if (!estadosValidos.includes(nuevoEstado)) return false;

  const solicitud = solicitudes.find((item) => item?.id === id);

  if (!solicitud || !estadosValidos.includes(solicitud.estado)) {
    return false;
  }

  if (solicitud.estado === nuevoEstado) return false;

  const anterior = solicitud.estado;
  const ids = auditoria.map((registro) => registro?.id).filter(Number.isSafeInteger);

  const siguienteId = ids.length ? Math.max(...ids) + 1 : 1;

  solicitud.estado = nuevoEstado;

  auditoria.push({
    id: siguienteId,
    actor_id: actor.id,
    solicitud_id: solicitud.id,
    accion: 'CAMBIO_ESTADO',
    anterior,
    nuevo: nuevoEstado,
    fecha: new Date().toISOString(),
  });

  return true;
}

export function registrarEvento(consentimiento, nombre, servicio, eventos) {
  const nombresPermitidos = ['select_service', 'submit_request'];

  const categoriasValidas = ['Accesos', 'Hardware', 'Red', 'Software'];

  if (consentimiento !== 'aceptado' || !nombresPermitidos.includes(nombre)) {
    return false;
  }

  if (
    !Array.isArray(eventos) ||
    !servicio ||
    !Number.isSafeInteger(servicio.id) ||
    servicio.id <= 0
  ) {
    return false;
  }

  if (!categoriasValidas.includes(servicio.categoria)) {
    return false;
  }

  eventos.push({
    event: nombre,
    service_id: String(servicio.id),
    categoria: servicio.categoria,
  });

  return true;
}
