# Arquitectura Front-End: Linguistic Quest

Este documento define la arquitectura estructural, el sistema de componentes y las reglas de diseño técnico para la aplicación de aprendizaje de idiomas **Linguistic Quest**. La arquitectura sigue un enfoque basado en componentes modulares, optimizado para crear una experiencia de "juego de mesa digital" interactivo y táctil.

## 1. Patrón Arquitectónico General

La aplicación utiliza un enfoque de aplicación de una sola página (SPA) centrada en la gestión de estado de un tablero de juego.

### 1.1. Gestión del Estado del Juego (Game State)

El estado central debe controlar:

- **Modo de Tablero Activo:** Alternancia entre "English Board" y "Spanish Board".
- **Progreso de Emparejamiento (Matches):** Rastreo de pares correctos entre inglés y español (ej. `0/40`).
- **Temporizador (Timer):** Control del tiempo transcurrido en la partida (ej. `04:52`).
- **Puntuación y XP:** Cálculo de precisión y experiencia ganada al finalizar.

## 2. Jerarquía de Componentes Principales

El sistema se divide en vistas principales y componentes atómicos reutilizables:

### Vistas (Pages / Screens)

1.  **Dashboard (`Menu`):** Pantalla de inicio con el progreso del usuario (nivel, racha, estrellas) y selección de lecciones.
2.  **GameBoardScreen (`English` / `Spanish`):** Vista principal del juego que aloja el tablero de cartas de 4x10.
3.  **ResultScreen:** Modal o pantalla de victoria mostrando tiempo, precisión y XP obtenido ("Well Done!").

### Componentes Core (UI Components)

- **`Layout`:** Contenedor maestro con fondo base Nivel 0 (`#f8f9ff`) que envuelve toda la aplicación.
- **`BottomNavigation`:** Barra de navegación fija inferior con iconos de línea y etiquetas ("Menu", "English", "Spanish"). Usa un fondo resaltado (pill) para el elemento activo.
- **`GameGrid` (Nivel 1):** Contenedor principal hundido (`rounded-xl` / 24px) que maneja una cuadrícula estricta de 4 columnas x 10 filas con un "gutter" de 16px.
- **`GameTile` (Nivel 2/3):** Componente de carta de juego. En estado normal tiene borde de 1px (`#c3c6d7`), sombra de 4px y esquinas redondeadas de 8px (`rounded-sm`). En estado interactivo (Hover/Activo) la sombra se expande a 8px.
- **`SquishyButton`:** Botón principal mecánico (ej. "Translation Board", "Play Again"). Implementa un borde inferior grueso (4px) que desaparece y se desplaza 2px hacia abajo al hacer clic.
- **`StatusBadge`:** Componentes de tipo pastilla (chips) para mostrar el temporizador y el contador de _Matches_ en la parte superior.

## 3. Tokens del Sistema de Diseño

El sistema de diseño implementa variables estrictas que deben ser mapeadas en CSS/Tailwind.

### 3.1. Paleta de Colores

- **Primary (Logic Blue):** `#004ac6` (base), `#2563eb` (contenedor). Usado para estructura, botones y cartas seleccionadas.
- **Secondary (Growth Green):** `#006c49` (base), `#6cf8bb` (contenedor). Usado para estados de éxito y el tablero en español.
- **Tertiary (Spark Amber):** `#784b00`, contenedor `#996100`. Usado para destacados, XP y racha.
- **Superficies y Fondos:** Base `#f8f9ff` (Level 0) y contenedores `#ffffff`.

### 3.2. Tipografía (Lexend)

La fuente exclusiva del sistema es **Lexend** para reducir la fatiga visual.

- **Display / Titulares:** `font-weight: 700` o `600`, tracking ajustado (-0.02em / -0.01em) para dar aspecto de juego.
- **Cuerpo (Body):** `font-weight: 400`, `16px` con alto interlineado (24px) para legibilidad.
- **Etiquetas (Labels):** `font-weight: 500` (Medium), `12px` para asegurar contraste en botones y cartas.

### 3.3. Sistema de Espaciado y Cuadrícula (Grid)

- **Escala Base:** Múltiplos de 8px (`0.5rem`).
- **Cuadrícula de Juego:** Matriz fija de `4x10` (40 celdas max) con márgenes y separación interna constante de `16px`.
- **Max-Width:** El tablero tiene un ancho máximo de `1200px` en pantallas grandes para no dispersar las piezas.
- **Radios de Borde (Border Radius):** Cero esquinas afiladas. Los elementos pequeños (cartas, botones) usan `8px` (`sm`), los contenedores grandes (tableros, modales) usan `24px` (`xl`).

## 4. Sistema de Elevación y Profundidad (Capas Z)

La arquitectura de interfaz simula fisicalidad mediante sombras ambientales y tonalidades:

- **Z-Level 0 (Suelo):** Fondo general de la App (`#f8f9ff`).
- **Z-Level 1 (Bandeja del Tablero):** Sombra interior suave en la cuadrícula 4x10.
- **Z-Level 2 (Piezas Base):** Cartas inactivas con opacidad de sombra al 10-15% (desplazamiento vertical de 4px).
- **Z-Level 3 (Piezas Activas/Hover):** La carta se eleva visualmente al expandir la sombra a 8px. Al hacer click (Active), la sombra se reduce a 0px y el elemento baja 2px simulando ser presionado.
