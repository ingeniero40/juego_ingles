# Prompt de Diseño UI: Juego de Cartas "Linguistic Quest"

## Estilo Visual y Concepto General

Diseña la interfaz de usuario para un juego móvil de aprendizaje de idiomas basado en el sistema de diseño "Linguistic Quest". El estilo debe ser un híbrido de **Minimalismo y Skeumorfismo Táctil**. La interfaz debe evocar un juego de mesa digital con elementos físicos, "esponjosos" (squishy) y seguros, promoviendo un "estado de flujo" educativo.

## Estructura de las Pantallas

### Pantalla 1: Tablero en Inglés (English Board)

- **Cuadrícula Principal (Nivel 1):** Un contenedor central ligeramente hundido (sombra interior suave) con esquinas súper redondeadas de 24px (`rounded-xl`). Debe alojar una cuadrícula fija de **4 columnas x 10 filas** (40 celdas en total) con una separación (gutter) de 16px entre ellas.
- **Cartas (Game Tiles - Nivel 2):** 40 cartas con fondo blanco sólido (`#ffffff`). Cada carta debe tener esquinas redondeadas de 8px (`rounded-sm`), un borde sutil de 1px gris claro, y una sombra vertical de 4px (10-15% de opacidad) con un ligero tinte azul para que parezcan piezas elevadas del tablero.
- **Contenido:** Cada carta debe mostrar un verbo en inglés centrado (ej. _Begin, Speak, Explore, Share_).
- **Interacción (Nivel 3):** Muestra al menos una carta en estado "activo/seleccionado". Esta carta debe expandir su sombra a 8px y cambiar su fondo a azul brillante ("Logic Blue", `#2563eb`) con el texto en blanco.

### Pantalla 2: Tablero de Traducción (Spanish Board)

- **Cuadrícula Principal:** Utiliza exactamente la misma estructura de 4x10 y el mismo contenedor base que la pantalla de inglés.
- **Cartas de Traducción:** Las 40 cartas deben mantener la misma forma geométrica, bordes (8px) y sombras. Sin embargo, su fondo debe ser de un color verde claro/menta ("Growth Green", ej. un tono muy claro de `#6cf8bb` o `#eafae4`) para diferenciar visualmente el segundo idioma.
- **Contenido:** Cada carta debe contener la traducción al español de los verbos correspondientes (ej. _Empezar, Hablar, Buscar, Compartir_).

## Elementos de la Interfaz Comunes (UI Periférica)

- **Fondo General (Nivel 0):** Color azul/gris frío muy claro (`#f8f9ff`) para toda la pantalla.
- **Tipografía:** Emplear exclusivamente la fuente **Lexend**. Utiliza pesos medios (`500`) o semi-negritos (`600`) para las palabras en las cartas y las etiquetas, asegurando máxima legibilidad.
- **Cabecera de Estado:** En la parte superior de ambos tableros, incluye:
  - Un temporizador con icono de reloj azul (ej. "04:52").
  - Un contador de aciertos ("Matches") con icono de check verde (ej. "0/40").
- **Botón de Cambio de Tablero:** Debajo de los contadores, diseña un botón principal ancho ("Translation Board" en la primera pantalla, "English Board" en la segunda). Debe ser "esponjoso" (squishy), incorporando un borde inferior grueso de 4px en un tono más oscuro para simular un botón mecánico 3D.
- **Barra de Navegación Inferior:** Una barra fija con iconos de estilo línea para: "Menu", "English" y "Spanish". La pestaña activa debe resaltarse con un fondo redondeado de color azul claro.

## Paleta de Colores Estricta

- **Primario (Logic Blue):** `#004ac6` y `#2563eb` (aplicado en botones principales, barra de navegación, temporizador y cartas seleccionadas).
- **Secundario (Growth Green):** `#006c49` y `#6cf8bb` (aplicado en contadores de éxito y el fondo de las cartas del tablero de traducción).
- **Superficies:** `#f8f9ff` (fondo de la aplicación) y `#ffffff` (superficie de las cartas).
