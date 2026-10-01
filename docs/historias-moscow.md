# C. Historias de usuario y prioridades MoSCoW

| ID    | Historia de usuario                                                                                                                         | Prioridad | Criterios medibles                                                                                                                                                            |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HU-01 | Como usuario, quiero consultar cuatro servicios para identificar qué tipo de soporte necesito.                                              | Must      | Se muestran exactamente 4 tarjetas; cada una tiene título, descripción y enlace al formulario.                                                                                |
| HU-02 | Como usuario, quiero llegar al formulario desde Inicio en un máximo de dos clics para registrar mi solicitud simulada.                      | Must      | El CTA “Solicitar soporte” está visible en Inicio y conduce al formulario en 1 clic; desde la navegación también debe existir acceso directo.                                 |
| HU-03 | Como usuario, quiero que el formulario valide mis datos antes de simular el envío para evitar solicitudes incompletas.                      | Must      | Nombre obligatorio con mínimo 3 caracteres; email obligatorio de tipo email; tipo obligatorio; prioridad mediante radios; descripción obligatoria de 10–500 caracteres.       |
| HU-04 | Como usuario, quiero consultar estados y preguntas frecuentes para entender el seguimiento y resolver dudas comunes.                        | Should    | Se muestran los 4 estados exigidos y 5 preguntas frecuentes distribuidas en al menos 2 categorías.                                                                            |
| HU-05 | Como equipo de soporte, quiero un modelo conceptual con auditoría para poder analizar cambios de solicitudes sin implementar una base real. | Could     | El diagrama contiene Usuario, Servicio, Solicitud, Actualización y Auditoría; incluye PK/FK, cardinalidades y permite reconstruir valor anterior/nuevo en cambios relevantes. |

## Won’t have

- Backend.
- Base de datos real.
- Persistencia de tickets.
- Envío real de formularios.
- Nuevas funcionalidades JavaScript fuera del `ui.js` entregado.

## Orden MoSCoW

- **Must:** HU-01, HU-02, HU-03.
- **Should:** HU-04.
- **Could:** HU-05.
- **Won’t:** backend, persistencia y envío real.
