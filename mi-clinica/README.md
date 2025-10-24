# Mi Clínica (React + Vite)

`mi-clinica` es la implementación oficial y única fuente de verdad del sistema de gestión clínico. El objetivo es reemplazar la versión estática heredada incorporando componentes reutilizables, rutas protegidas y flujos accesibles.

## Requisitos
- Node.js 20+
- pnpm, npm o yarn (cualquiera de los gestores soportados por Vite)

## Scripts principales
```bash
npm install      # instala dependencias
npm run dev      # levanta el servidor de desarrollo en http://localhost:5173
npm run build    # genera el build de producción
npm run preview  # sirve el build generado
```

## Estructura relevante
```
src/
  main.tsx        # punto de entrada de React
  App.tsx         # composición de rutas y layout principal
  assets/         # recursos compartidos (iconos, imágenes, etc.)
```

## Relación con el legado
- Todos los flujos en React deben mapearse a los hitos definidos en [`../docs/transicion-react.md`](../docs/transicion-react.md).
- Cualquier cambio detectado entre esta app y el material estático debe resolverse actualizando `mi-clinica`.
- QA y documentación viva se gestionan exclusivamente desde esta base de código.

## Próximos pasos
Consulta el plan de transición para conocer fechas, responsables y decisiones sobre activos heredados.
