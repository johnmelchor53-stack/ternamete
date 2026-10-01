# Nova Servicios — Portal de Soporte

Este proyecto parte del portal TI entregado y fue adaptado para la nueva actividad de
Nova Servicios. Se mantiene HTML, CSS y JavaScript propios, sin frameworks.

## Archivos principales

- `public/index.html`: portal, navegación, servicios, formulario, estados, FAQ y contacto.
- `public/assets/css/styles.css`: diseño responsive mobile first, variables CSS, Grid y Flexbox.
- `public/assets/js/ui.js`: menú móvil, teclado, contador y simulación del formulario.
- `docs/modelo-conceptual.md`: modelo conceptual de usuarios, servicios, solicitudes,
  actualizaciones y auditoría.
- `docs/pruebas.md`: registro para documentar las pruebas reales.

## Requisitos de la actividad cubiertos

1. Encabezado y navegación; el CTA llega al formulario mediante un clic.
2. Cuatro tarjetas de servicio.
3. Formulario.
4. Estados ficticios.
5. Cinco preguntas frecuentes en dos categorías.
6. Contacto con horario ficticio.
7. Nombre mínimo 3 caracteres, correo, tipo obligatorio, prioridad de opción única y
   descripción de 10 a 500 caracteres, usando labels, fieldset, legend y validación nativa.
8. No se envían ni guardan tickets: el JavaScript solo simula el proceso.
9. Diseño mobile first con puntos de adaptación para 320, 768 y 1440 px, zoom y foco de teclado.
10. HTML/CSS/JS propios, sin frameworks; incluye variables CSS, Grid y Flexbox.

## Ejecución

```bash
npm ci
npm run dev
```

Luego abre `http://127.0.0.1:5500`.

También puedes usar Live Server sobre `public/index.html`.

Para comprobar el proyecto:

```bash
npm run format
npm run check
npm run check:syntax
npm test
```

Usa únicamente datos ficticios durante las pruebas.
