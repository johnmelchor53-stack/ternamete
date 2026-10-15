# D. Wireframe de baja fidelidad — seis zonas

La consigna exige seis espacios: encabezado y navegación, presentación principal, catálogo, formulario, estados de ejemplo y pie de página.

```text
┌─────────────────────────────────────────────────────────────────────┐
│ ZONA 1 — ENCABEZADO + NAVEGACIÓN                                   │
│ Logo Nova Servicios | Inicio | Servicios | Estados | Preguntas ... │
├─────────────────────────────────────────────────────────────────────┤
│ ZONA 2 — PRESENTACIÓN PRINCIPAL                                    │
│ “Soporte claro para que tu servicio siga avanzando”                │
│ Texto breve + [Solicitar soporte]                                  │
├─────────────────────────────────────────────────────────────────────┤
│ ZONA 3 — CATÁLOGO                                                   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                │
│ │ Servicio │ │ Servicio │ │ Servicio │ │ Servicio │                │
│ │    1     │ │    2     │ │    3     │ │    4     │                │
│ │ [Solic.] │ │ [Solic.] │ │ [Solic.] │ │ [Solic.] │                │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘                │
├─────────────────────────────────────────────────────────────────────┤
│ ZONA 4 — FORMULARIO                                                  │
│ Datos de contacto + tipo + prioridad + descripción + [Simular]     │
├─────────────────────────────────────────────────────────────────────┤
│ ZONA 5 — ESTADOS DE EJEMPLO                                         │
│ Pendiente | En proceso | Resuelto | Cerrado/Cancelado              │
├─────────────────────────────────────────────────────────────────────┤
│ ZONA 6 — PIE DE PÁGINA                                               │
│ Preguntas frecuentes | Contacto | Horario ficticio                  │
└─────────────────────────────────────────────────────────────────────┘
```

## Flujo principal

Inicio → Solicitar soporte → Formulario → validación nativa → confirmación simulada.

## Criterios responsive

- 320 px: una columna y sin desbordamiento horizontal.
- 768 px: distribución intermedia.
- 1440 px: contenido centrado con catálogo en varias columnas.
