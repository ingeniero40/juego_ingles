# Linguistic Quest

## Descripción General

**Linguistic Quest** es una aplicación de aprendizaje de idiomas diseñada para fomentar un "estado de flujo" educativo. Al equilibrar la emoción de un juego digital con un entorno de aprendizaje sereno, la aplicación proporciona a los usuarios una experiencia altamente interactiva y visualmente estimulante. El diseño es un híbrido entre el minimalismo y elementos skeumórficos y táctiles, evocando la sensación de un juego de mesa físico de alta calidad adaptado al formato digital.

## Características Principales

- **Dashboard de Progreso:** Una pantalla de inicio ("Menu") donde los jugadores pueden revisar su nivel, su racha de días, su progreso de XP diario y acceder a diferentes módulos de lecciones (como _Common Verbs_, _At the Office_, _Food & Drinks_) o eventos en vivo.
- **Mecánica de Juego Dual (Tableros de 4x10):** El núcleo del aprendizaje se centra en el emparejamiento de vocabulario a través de dos tableros paralelos:
  - **Tablero en Inglés:** Una cuadrícula fija de 4 columnas por 10 filas que contiene las palabras base a aprender.
  - **Tablero en Español:** Una cuadrícula complementaria para encontrar las traducciones, diferenciada visualmente para facilitar el reconocimiento del idioma.
- **Retroalimentación y Resultados:** Tras completar un tablero de 40 parejas de palabras, un sistema de resultados evalúa el desempeño mostrando el Tiempo empleado, la Precisión (Accuracy) y la Experiencia Ganada (XP). Los modales de éxito o error se deslizan desde la parte inferior para ofrecer feedback inmediato.

## Sistema de Diseño (Design System)

El proyecto se rige por un sistema de diseño estricto orientado a reducir la fatiga visual y mantener una estética amigable:

- **Tipografía Exclusiva:** Toda la aplicación utiliza la fuente **Lexend**, diseñada específicamente para reducir el estrés visual y mejorar la fluidez de lectura.
- **Paleta de Colores Dual:**
  - **Logic Blue (`#004ac6`, `#2563eb`):** Utilizado para la estructura principal, navegación, el tablero de inglés y las cartas seleccionadas, transmitiendo calma y autoridad.
  - **Growth Green (`#006c49`, `#6cf8bb`):** Reservado para recompensar visualmente al usuario en los estados de éxito, progreso, y el fondo de las cartas en el tablero de español.
  - **Spark Amber (`#784b00`, `#996100`):** Aplicado con moderación para destacar logros (como estrellas y XP) y llamadas a la acción.
- **Interfaz Táctil y Profundidad:** La aplicación utiliza "sombras ambientales" para crear distintos niveles de profundidad. Las piezas del juego se ven elevadas del tablero de fondo. Al interactuar con ellas, la sombra se expande para simular que la carta ha sido recogida físicamente.
- **Componentes "Esponjosos" (Squishy):** Los botones principales tienen un borde inferior grueso (4px) que desaparece al presionarlos, imitando el comportamiento de un interruptor mecánico 3D.
- **Geometría Amigable:** Se evitan por completo las esquinas afiladas. Las piezas pequeñas y botones emplean radios de 8px, mientras que los contenedores grandes (como el tablero del juego y las tarjetas modales) emplean esquinas muy redondeadas de 24px (`rounded-xl`).

## Documentación Adicional

Para más detalles sobre la implementación técnica y flujos de usuario, consulta los siguientes documentos:

- `ARCHITECTURE.md`: Definición de la estructura Front-End, gestión de estado y jerarquía de componentes.
- `use_cases.md`: Descripción detallada de los casos de uso principales de los jugadores.
- `DESIGN.md`: Documentación completa de los tokens del sistema visual.
