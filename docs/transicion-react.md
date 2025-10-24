# Plan de transición a React

## Resumen general
- `mi-clinica` es la implementación oficial del sistema clínico. Todo nuevo desarrollo debe originarse y validarse aquí.
- El proyecto estático en `Nueva carpeta/` se mantiene únicamente como referencia visual durante la migración. No se aceptan cambios funcionales en ese espacio.
- Este documento detalla los hitos de equivalencia entre ambos mundos, la política de activos heredados y el plan de comunicación del cronograma de desuso.

## Hitos de equivalencia React
Cada módulo del sitio estático deberá contar con su contraparte en React validada con negocio y diseño. Las fechas se indican en formato `DD/MM/AAAA`.

| Módulo estático de referencia | Ruta/feature en `mi-clinica` | Entregable de validación | Estado actual | Fecha objetivo |
| --- | --- | --- | --- | --- |
| Dashboard principal (`index.html`) | `/dashboard` | Demo funcional con datos simulados aprobada por dirección médica | ✅ Validado | 07/06/2024 |
| Gráficas (`pages/charts/chartjs.html`) | `/analytics` | Revisión conjunta con el equipo de BI sobre componentes `<ChartsPanel />` | 🔄 En validación | 14/06/2024 |
| Formularios (`pages/forms/basic_elements.html`) | `/patients/new` | Flujo de alta de paciente probado con QA y checklist de accesibilidad | 🛠️ En desarrollo | 21/06/2024 |
| Tablas (`pages/tables/basic-table.html`) | `/patients` | Sesión de prueba con mesa de operaciones validando filtros y exportación | 🛠️ En desarrollo | 28/06/2024 |
| Iconografía (`pages/icons/font-awesome.html`) | Librería de iconos dentro de `ui/iconography` | Catálogo publicado en Storybook con aprobaciones de diseño | 🗓️ Planificado | 05/07/2024 |
| Componentes UI (`pages/ui-features/*.html`) | `ui/components` | Inventario en Storybook y guía de uso compartida en Confluence | 🗓️ Planificado | 12/07/2024 |
| Páginas de autenticación (`pages/samples/login.html`, `register.html`) | `/auth/login`, `/auth/register` | Pruebas de regresión de seguridad y accesibilidad completadas | 🗓️ Planificado | 19/07/2024 |
| Páginas de error (`pages/samples/error-4xx.html`, `error-500.html`) | `/<cualquier-ruta>` manejo global de errores | Validación QA de fallback y trazabilidad en Sentry | 🗓️ Planificado | 26/07/2024 |

> **Nota:** Cuando un hito se marque como “Validado”, la ruta React asociada pasa a ser el único punto de verdad para ese módulo.

## Política sobre activos heredados
Los siguientes elementos del proyecto estático se conservarán como referencia durante la migración:

| Activo | Ubicación | Motivo de conservación |
| --- | --- | --- |
| Documentación funcional original | `Nueva carpeta/src/docs/documentation.html` | Contexto histórico sobre flujos y roles del sistema. |
| Recursos gráficos (logos, ilustraciones) | `Nueva carpeta/src/assets/images/` | Material base hasta completar la migración a un design system propio. |
| Fragmentos HTML de navegación y layout | `Nueva carpeta/src/partials/` | Referencia de jerarquía y copy mientras se consolida la arquitectura de React. |

Se programan para eliminación una vez cerrada la migración los siguientes activos:

| Activo | Ubicación | Acción | Fecha estimada |
| --- | --- | --- | --- |
| Paquetes de vendors legacy | `Nueva carpeta/src/assets/vendors/` | Eliminación definitiva del repositorio | 02/08/2024 |
| Scripts Gulp y tareas de build | `Nueva carpeta/src/gulp-tasks/`, `Nueva carpeta/src/gulpfile.js` | Eliminación | 02/08/2024 |
| Páginas HTML remanentes | `Nueva carpeta/src/pages/` | Archivo comprimido y traslado a almacenamiento frío | 09/08/2024 |

## Cronograma de desuso y comunicación
| Fase | Fecha | Acción | Responsable | Canal |
| --- | --- | --- | --- | --- |
| Anuncio inicial | 03/06/2024 | Comunicado oficial del cambio de fuente de verdad y publicación de este plan | Líder de proyecto | Reunión de equipo + correo resumen |
| Congelamiento de cambios en estático | 10/06/2024 | Bloquear merges hacia `Nueva carpeta/` salvo fixes críticos documentados | Tech Lead | Canal #frontend en Slack |
| Validación integral | 26/07/2024 | Confirmar cierre de todos los hitos y levantar pendientes en retrospectiva | PM + QA Lead | Daily extendido + acta en Confluence |
| Retiro definitivo | 12/08/2024 | Eliminar assets marcados, actualizar pipelines y limpiar dependencias | DevOps | Pull Request + anuncio en Slack |

### Mensajes clave a compartir con el equipo
1. Toda la documentación viva (especificaciones, diagramas, manuales) debe residir en `mi-clinica` y los espacios vinculados (Storybook, Confluence).
2. Cualquier discrepancia entre la versión estática y React se resuelve a favor de `mi-clinica`.
3. Los equipos de QA y soporte deben validar y registrar incidencias únicamente sobre la nueva interfaz.
4. Las referencias al prototipo estático deben incluir un recordatorio de que se trata de material legado.

## Próximos pasos inmediatos
- Actualizar el tablero de proyecto con los hitos y fechas de esta guía.
- Programar las sesiones de validación indicadas para cada módulo.
- Ajustar pipelines CI/CD para que publiquen únicamente desde `mi-clinica`.
- Eliminar cualquier acceso público al build estático una vez completado el retiro definitivo.
