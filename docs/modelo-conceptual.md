# Modelo conceptual — Nova Servicios

## Entidades

### USUARIO

- **id_usuario** (PK)
- nombre
- correo
- rol
- fecha_registro
- estado

### SERVICIO

- **id_servicio** (PK)
- nombre
- descripcion
- estado

### SOLICITUD

- **id_solicitud** (PK)
- fecha_creacion
- descripcion
- prioridad
- estado
- id_usuario (FK)
- id_servicio (FK)

### ACTUALIZACION

- **id_actualizacion** (PK)
- fecha
- comentario
- estado_anterior
- estado_nuevo
- id_solicitud (FK)
- id_usuario (FK)

### AUDITORIA

- **id_auditoria** (PK)
- fecha_hora
- accion
- entidad
- id_registro
- detalle
- id_usuario (FK)

## Relaciones y cardinalidades

```text
USUARIO 1 ───────── N SOLICITUD N ───────── 1 SERVICIO
              │
              │ 1
              │
              N
        ACTUALIZACION
              │
              N
              │
              1
            USUARIO

USUARIO 1 ───────── N AUDITORIA
```

- Un usuario puede crear muchas solicitudes.
- Cada solicitud pertenece a un usuario y a un servicio.
- Un servicio puede tener muchas solicitudes.
- Una solicitud puede tener muchas actualizaciones.
- Un usuario puede registrar muchas actualizaciones.
- Un usuario puede generar muchas acciones de auditoría.

> Este modelo es conceptual: el portal solicitado es estático y no implementa una base
> de datos ni almacenamiento real de tickets.
