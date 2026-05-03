# Casos de Uso: Linguistic Quest

Este documento describe las interacciones principales del usuario (Actor) con el sistema del juego de aprendizaje de idiomas **Linguistic Quest**, estructurado para fomentar un "estado de flujo" educativo.

## Actores

- **Jugador/Estudiante:** Usuario final que interactúa con la aplicación para practicar vocabulario y gramática.

---

## Caso de Uso 1: Navegación del Dashboard y Selección de Lección

**Descripción:** El jugador accede a la pantalla principal para revisar su progreso y elegir un módulo de aprendizaje.
**Precondiciones:** El jugador ha iniciado sesión en la aplicación.

**Flujo Principal:**

1. El sistema muestra la pantalla de menú (`Menu`) con el perfil del usuario (ej. Nivel actual, Estrellas Totales, Racha de Días).
2. El jugador revisa su meta diaria de experiencia (XP).
3. El jugador explora las categorías disponibles en forma de tarjetas, como "Common Verbs", "At the Office", "Food & Drinks", "Travel & Maps" o eventos en vivo como "Idiom Expedition".
4. El jugador toca una categoría para iniciar una partida.

**Postcondiciones:** El sistema carga los datos de la lección (pares de palabras) y redirige al jugador a la pantalla del Tablero en Inglés (`English Board`).

---

## Caso de Uso 2: Selección de Palabra Base en el Tablero de Inglés

**Descripción:** El jugador inicia el proceso de emparejamiento seleccionando una palabra en su idioma de estudio (Inglés).
**Precondiciones:** El jugador está en la vista `English Board`.

**Flujo Principal:**

1. El sistema muestra una cuadrícula de 4 columnas por 10 filas con 40 cartas blancas.
2. El sistema inicia un temporizador y muestra el contador de aciertos ("Matches: 0/40") en la parte superior.
3. El sistema muestra la instrucción: "Click an English word to find its match".
4. El jugador toca una carta (ej. "Speak").
5. El sistema marca la carta como activa, aplicando una animación de "presionado", expandiendo su sombra y cambiando su color de fondo al color primario ("Logic Blue") con texto en blanco.

**Postcondiciones:** La palabra en inglés queda registrada en el estado del juego como la "palabra a emparejar".

---

## Caso de Uso 3: Cambio de Tablero (Traducción)

**Descripción:** El jugador cambia la vista del tablero de inglés al tablero de español para buscar la traducción de la palabra seleccionada.
**Precondiciones:** El jugador ha seleccionado o no una palabra en el tablero actual.

**Flujo Principal:**

1. El jugador presiona el botón interactivo principal (botón mecánico o "squishy") ubicado bajo los contadores, que indica "Translation Board" (si está en inglés) o "English Board" (si está en español).
2. Alternativamente, el jugador toca la pestaña "Spanish" o "English" en la barra de navegación inferior.
3. El sistema cambia la vista mostrando el tablero correspondiente.
   - _Nota visual:_ Si cambia al tablero de español, el sistema muestra las 40 cartas de traducción con un fondo verde claro ("Growth Green").

**Postcondiciones:** El usuario visualiza la cuadrícula de destino para completar la acción.

---

## Caso de Uso 4: Emparejamiento de Traducción (Matching)

**Descripción:** El jugador selecciona la traducción correcta en el tablero secundario para completar un par.
**Precondiciones:** El jugador ha seleccionado una palabra (ej. "Speak") en el Tablero de Inglés y ha navegado al Tablero de Español.

**Flujo Principal:**

1. El jugador revisa la cuadrícula de palabras en español.
2. El jugador toca la carta que considera la traducción correcta (ej. "Hablar").
3. El sistema valida el par.
4. Si es correcto, el sistema actualiza visualmente el contador de progreso ("Matches") aplicando el color "Growth Green" como estado de éxito.
5. Las cartas emparejadas se desactivan o se marcan como resueltas en ambos tableros.

**Flujo Alternativo (Error):**

1. Si el jugador selecciona una traducción incorrecta, el sistema no suma el punto y puede mostrar una retroalimentación visual de error rápida.

**Postcondiciones:** El contador de "Matches" se incrementa (ej. de `0/40` a `1/40`).

---

## Caso de Uso 5: Finalización de la Partida y Resultados

**Descripción:** El jugador completa todos los pares del tablero y revisa su desempeño.
**Precondiciones:** El contador de "Matches" alcanza el máximo (ej. `40/40`).

**Flujo Principal:**

1. El sistema detiene el temporizador.
2. El sistema redirige al jugador a la pantalla de resultados que muestra el título "Well Done!" junto con el mensaje de dominio de la lección.
3. El sistema calcula y muestra tres métricas principales:
   - Tiempo total ("Time", ej. `4:25`).
   - Precisión ("Accuracy", ej. `92%`), destacada con un contorno verde.
   - Experiencia ganada ("XP Earned", ej. `+150`), destacada con un contorno naranja/ámbar.
4. El jugador presiona el botón primario "Play Again" para reiniciar el tablero o navega al menú principal usando la barra inferior.

**Postcondiciones:** El estado global del usuario (XP, Racha, Nivel) se actualiza en el Dashboard.
