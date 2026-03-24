# Comp Library (React + TypeScript)

Librería UI reutilizable y escalable con **showcase visual** y sistema de themes.

## Arquitectura

```txt
src/
  app/                # página showcase principal
  components/         # componentes por dominio
    buttons/
    navigation/
    content/
    forms/
    data-display/
    feedback/
    layout/
    index.ts          # barrel exports
  data/               # datos demo para poblar UI
  hooks/              # hooks reutilizables
  styles/             # global + themes + tokens
  themes/             # metadata de themes
  types/              # tipos compartidos
  utils/              # utilidades puras
```

## Themes incluidos

- **classic**: neomorfismo limpio y usable.
- **glass**: glassmorphism con blur y contraste alto.
- **organic**: formas suaves con tono amable.
- **editorial** *(extra)*: estética sobria de alto contraste útil para blogs, docs y productos B2B.

## Escalabilidad

### Añadir un nuevo componente
1. Crear carpeta en `src/components/<categoria>/`.
2. Definir props tipadas y módulo CSS.
3. Exportar en `src/components/index.ts`.
4. Añadir bloque de ejemplo en `src/app/Showcase.tsx`.

### Añadir un nuevo theme
1. Agregar bloque `[data-theme='nuevo']` en `src/styles/themes.css`.
2. Añadir clave en `src/themes/themeTokens.ts` y tipo `ThemeName`.
3. Verificar contraste/focus/estados en showcase.

## Decisiones de diseño

- Se usa **CSS variables por theme** para evitar duplicación de estilos por componente.
- Las variantes globales son `solid` y `outline` para consistencia transversal.
- El showcase agrupa por bloques reales de uso (layout, forms, feedback, data).
- Se priorizó semántica y accesibilidad base (labels, roles, focus-visible).
