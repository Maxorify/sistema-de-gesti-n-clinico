# Sistema de diseño clínico

Este documento describe los tokens de diseño y animaciones reutilizables migrados desde el panel legado.

## Tokens de estilo (`src/styles/tokens.scss`)

### Paletas disponibles

| Token | Descripción | Uso sugerido |
| ----- | ----------- | ------------ |
| `$color-palette` | Colores base (blue, indigo, purple, pink, red, orange, yellow, green, teal, cyan, white, white-smoke, violet, dark-slate-gray, dodger-blue, cyan-dark). | Referencias cromáticas amplias, gradientes personalizados o dashboards temáticos. |
| `$theme-colors` | Colores semánticos principales (`primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light`, `dark`, `purple`). | Estados de botones, indicadores de estado y componentes interactivos. |
| `$semantic-colors` | Colores utilitarios (`content-bg`, `border`, `text-muted`, `text-default`, `highlight`, `surface-contrast`). | Fondos, bordes y textos neutros en paneles, tarjetas y layouts. |

### Tokens tipográficos

| Token | Valor | Uso |
| ----- | ----- | --- |
| `$font-families` | `body`, `heading`, `monospace` (todos basados en Manrope, con alternativa monoespaciada). | Establecer tipografía consistente en bloques de texto y títulos. |
| `$font-sizes` | Escala tipográfica desde `body` (0.812rem) hasta `display-5` (1.25rem) más `button`, `label` y `caption`. | Definir jerarquía en títulos, copy base y elementos de UI. |
| `$line-heights` | `body`, `heading`, `display`, `tight`, `relaxed`. | Controlar la legibilidad de los textos según su función. |

### Funciones y mixins

| Utilidad | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| `color($token, $map)` | Recupera un color de cualquiera de las paletas. | `color(primary)`, `color('content-bg', $semantic-colors)` |
| `text-color($token, $map)` | Aplica el color al texto actual. | `@include text-color('text-muted', $semantic-colors);` |
| `background-color($token, $map)` | Define el color de fondo usando un token. | `@include background-color(primary);` |
| `border-color($token, $map)` | Aplica un color a bordes. | `@include border-color('border', $semantic-colors);` |
| `font-family($token)` | Devuelve la familia tipográfica solicitada. | `font-family: font-family(heading);` |
| `font-size($token)` | Devuelve el tamaño tipográfico solicitado. | `font-size: font-size(h3);` |
| `line-height($token)` | Obtiene la altura de línea configurada. | `line-height: line-height(relaxed);` |
| `font($size, $family, $weight, $line-height)` | Mixin compuesto para definir tipografía completa en un solo paso. | `@include font(h4, heading, 600);` |

## Animaciones (`src/styles/animations.scss`)

### Duraciones

Las duraciones se exponen como tokens en `$animation-durations` y se consultan con `duration($token)`:

- `fast`: 0.15s
- `action`: 0.3s
- `slow`: 0.6s
- `loop`: 3s

### Keyframes disponibles

| Keyframe | Comportamiento | Uso típico |
| -------- | -------------- | --------- |
| `dropdown-animation` | Transición de entrada desde arriba con desvanecimiento. | Menús desplegables, tooltips. |
| `fade-out` | Reduce la opacidad hasta desaparecer. | Toasts, overlays. |
| `spin` | Rotación continua de 360°. | Indicadores de carga. |
| `fade-in-up` | Entrada sutil desde abajo con aumento de opacidad. | Tarjetas o secciones al entrar en escena. |

### Mixins

| Mixin | Descripción |
| ----- | ----------- |
| `use-animation($name, $duration, $timing, $fill, $iteration)` | Helper genérico para declarar animaciones con tokens de duración. |
| `dropdown($duration-token)` | Aplica `dropdown-animation` con temporización `ease-out`. |
| `fade-out($duration-token)` | Aplica el keyframe `fade-out`. |
| `fade-in-up($duration-token)` | Aplica la animación de entrada desde abajo. |
| `infinite-spin($duration-token)` | Aplica `spin` en bucle, ideal para loaders o iconos en hover. |

## Ejemplos prácticos

```scss
@use '@/styles/tokens';
@use '@/styles/animations';

.card {
  @include tokens.background-color('surface-contrast', tokens.$semantic-colors);
  @include tokens.border-color('border', tokens.$semantic-colors);
  @include tokens.font(body);
  padding: 1.5rem;
}

.card--success {
  border-inline-start: 4px solid tokens.color(success);
}

.dropdown-menu {
  @include animations.dropdown();
}

.loader {
  @include animations.infinite-spin(loop);
}
```

Consulta `src/App.module.scss` para ver cómo se usan los tokens dentro de un componente con CSS Modules.
