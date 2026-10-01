# B. Brief de cinco dimensiones — Nova Servicios

> Base: consigna del Examen Parcial de Desarrollo Web 2026-II. El examen pide un brief breve de cinco dimensiones, pero no define en el PDF los nombres exactos de esas dimensiones. Se usa una organización operativa para documentar el encargo sin inventar funcionalidades fuera de la consigna.

## 1. Problema / necesidad
Nova Servicios necesita un portal web de soporte para que sus usuarios consulten servicios, registren una solicitud simulada y revisen estados de ejemplo.

## 2. Usuarios / actores
- Usuarios del portal: consultan servicios y completan una solicitud simulada.
- Rol técnico: es el único autorizado para cambiar el estado de una solicitud.
- Actor de auditoría: queda identificado en los registros de auditoría para investigar cambios relevantes.

## 3. Objetivo
Construir un sitio estático responsive que permita llegar al formulario desde el inicio en un máximo de dos clics, validar los datos en el navegador y mostrar una confirmación claramente simulada, sin enviar ni guardar tickets.

## 4. Alcance funcional
- Encabezado y navegación.
- Presentación principal.
- Cuatro tarjetas de servicio.
- Formulario de soporte.
- Estados ficticios: Pendiente, En proceso, Resuelto y Cerrado/Cancelado.
- Cinco preguntas frecuentes en al menos dos categorías.
- Contacto con horario y medio ficticios.
- Modelo conceptual de Usuario, Servicio, Solicitud, Actualización y Auditoría.
- Análisis de los casos 1001/1005 y 1002/registro 5004.

## 5. Restricciones y criterios
- HTML semántico y CSS propio, sin frameworks.
- Sitio estático: sin servidor ni base de datos real.
- No instalar dependencias ni añadir backend.
- Mantener el `ui.js` de la Guía 2 sin modificaciones.
- Validación nativa: nombre >= 3 caracteres, email, tipo obligatorio, prioridad única y descripción de 10–500 caracteres.
- Diseño mobile first, sin desbordamiento horizontal a 320 px; comprobación a 320, 768 y 1440 px y zoom 200 %.
- Foco de teclado visible y uso con Tab/Shift+Tab.
- Datos ficticios.
