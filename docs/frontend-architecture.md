# Frontend architecture

Este documento define la estructura propuesta para el frontend de **Mi Clínica**, las convenciones de nombres y la estrategia de estilos que seguiremos durante la migración al nuevo esquema.

## 1. Jerarquía de directorios `src`

La estructura base propuesta es:

```
src/
├── assets/
├── components/
├── layouts/
├── pages/
├── services/
├── styles/
└── utils/
```

> Nota: Se mantiene `src/utils/` para albergar helpers y hooks compartidos que no pertenecen a otra categoría. En la migración debemos mover los archivos existentes a la carpeta adecuada antes de crear nuevas implementaciones.

### Responsabilidades por carpeta

- **`assets/`**: Archivos estáticos compartidos (imágenes, íconos SVG, fuentes). No debe contener lógica de React ni hojas de estilo.
- **`components/`**: Componentes reutilizables y atómicos (botones, formularios, tablas). Cada subcarpeta representa un componente y contiene su archivo `.tsx`, hoja de estilos asociada (`*.module.scss`) y pruebas.
- **`layouts/`**: Componentes de layout y plantillas que definen la estructura general de secciones completas (p. ej. `DashboardLayout`). Gestionan cabeceras, barras laterales y slots para contenido.
- **`pages/`**: Entradas de enrutamiento que ensamblan layouts, componentes y servicios. Cada página debe ser la unidad conectada al router y responsable de cargar datos necesarios.
- **`services/`**: Capa de acceso a datos (API, almacenamiento local, clientes HTTP). Debe exponer funciones puras o hooks que interactúen con la red y reutilicen lógica de `utils/`.
- **`styles/`**: Tokens de diseño, mixins globales y estilos compartidos (reset, tipografía base). Aquí no se definen estilos específicos de componentes.

## 2. Convenciones de nombres

- **Componentes y layouts**: `PascalCase` para archivos y nombres de componentes (`PatientCard.tsx`, `DashboardLayout.tsx`).
- **Páginas**: `PascalCase` con sufijo `Page` (`PatientsPage.tsx`).
- **Hooks personalizados**: `camelCase` con prefijo `use` (`usePatientFilters.ts`).
- **Servicios**: `camelCase` describiendo la acción (`fetchPatients.ts`, `createAppointment.ts`).
- **Estilos aislados**: `*.module.scss` junto al componente que los usa (`PatientCard.module.scss`).
- **Tests y stories**: seguir la convención `{Nombre}.test.tsx` y `{Nombre}.stories.tsx` ubicados en la misma carpeta del componente.
- **Archivos globales de estilo**: `src/styles/*.scss` con nombres en `kebab-case` según su propósito (`tokens.scss`, `global.scss`).

## 3. Estrategia de estilos

Adoptaremos **CSS Modules con SCSS** para los estilos de componentes, porque:

1. Aíslan el alcance de clases y evitan colisiones.
2. Permiten aprovechar anidado, mixins y funciones de Sass.
3. Facilitan la reutilización de tokens definidos por la plantilla original de Vite.

### Reutilización de tokens existentes

- Consolidaremos las variables definidas actualmente en `src/index.css` dentro de `src/styles/tokens.scss`. Allí replicaremos las custom properties (`--color-primary`, `--font-base`, etc.) mapeando los valores actuales de la plantilla para mantener consistencia visual.
- Los estilos globales (reset, tipografía base, configuración de `body`) se moverán a `src/styles/global.scss`, que importará `tokens.scss`.
- Cada componente importará su módulo SCSS y accederá a los tokens mediante `@use` o `var(--token)` según convenga.
- Los estilos temáticos (modo claro/oscuro) se controlarán en `global.scss` actualizando las variables de `tokens.scss`, evitando duplicar reglas en módulos individuales.

### Uso recomendado

```scss
/* src/components/PatientCard/PatientCard.module.scss */
@use "@styles/mixins";

.card {
  background: var(--surface-default);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}
```

```tsx
import styles from "./PatientCard.module.scss";

export function PatientCard() {
  return (
    <article className={styles.card}>
      {/* contenido */}
    </article>
  );
}
```

Para facilitar los imports, configuraremos un alias `@styles` que apunte a `src/styles` en `vite.config.ts` durante la migración.

## 4. Reglas para la migración

1. **Inventario actual**: Identificar cada archivo existente (`App.tsx`, `App.css`, etc.) y asignarlo a la nueva estructura antes de introducir código nuevo.
2. **Crear tokens primero**: Extraer las variables y estilos base de `index.css`/`App.css` a `styles/tokens.scss` y `styles/global.scss`. Importar `global.scss` en `main.tsx`.
3. **Migrar componentes**: Para cada componente, crear su carpeta bajo `components/Nombre` con el par `{Nombre}.tsx` y `{Nombre}.module.scss`.
4. **Actualizar rutas de importación**: Ajustar las rutas relativas tras mover archivos para evitar imports rotos. Priorizar los alias definidos.
5. **Validar visualmente**: Tras cada migración significativa, ejecutar la app (`npm run dev`) y verificar que los tokens aplican correctamente en modo claro/oscuro.
6. **Documentar excepciones**: Si algún componente necesita estilos globales adicionales, documentarlo en este archivo y justificar la elección antes de fusionar cambios.

Seguir estas pautas asegurará una migración ordenada y consistente con la plantilla base del proyecto.
