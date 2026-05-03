---
name: Linguistic Quest
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-base:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-margin: 2rem
  grid-gutter: 1rem
  card-padding: 1.5rem
  stack-gap: 0.75rem
  game-board-max-width: 1200px
---

## Brand & Style

This design system is built to foster a "Flow State" for language learners—balancing the excitement of a game with the serenity of an educational environment. The brand personality is encouraging, dependable, and intellectually stimulating. 

The visual style is a hybrid of **Minimalism** and **Tactile/Skeuomorphic** elements. By stripping away unnecessary clutter while adding "squishy," physical-feeling buttons and cards, the UI creates a sense of "digital play." The goal is to evoke the feeling of a premium physical board game that has been translated perfectly into a digital space, ensuring high accessibility for students of all ages.

## Colors

The palette is anchored in a dual-primary system of "Logic Blue" and "Growth Green." Blue is used for structural elements, navigation, and primary instructions to maintain a calm, authoritative atmosphere. Green is reserved for progress, success states, and interactive "correct" feedback to reward the user visually.

A tertiary "Spark Amber" is used sparingly for highlights, achievements, and call-to-actions that require immediate attention. The neutral scale uses cool slates rather than pure greys to maintain the vibrant, clean aesthetic without feeling sterile.

## Typography

This design system utilizes **Lexend** across all levels. Lexend was specifically designed to reduce visual stress and improve reading fluency, making it the perfect choice for an educational game. 

Headlines use a bolder weight with tighter tracking to feel impactful and "game-like." Body text maintains generous line height and standard tracking to ensure that complex English sentences remain legible even on smaller mobile screens. All labels should be set in medium or semi-bold weights to ensure they stand out against the vibrant background colors.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for the core game mechanics, centered on a 4x10 matrix. This 40-cell grid acts as the "board," providing a rhythmic and predictable structure for vocabulary and grammar exercises.

Spacing is governed by an 8px (0.5rem) baseline power-of-two scale. Elements within the 4x10 grid use consistent 16px gutters to ensure that touch targets are generous. On larger screens, the grid is constrained to a maximum width to prevent the "board" from feeling sparse, while on mobile, the grid scales fluidly with increased margins.

## Elevation & Depth

To achieve the "digital board game" feel, this design system utilizes **Ambient Shadows** and **Tonal Layers**. Depth is used to communicate interactivity:

1.  **Level 0 (Floor):** The main background uses a very light cool-grey or subtle blue tint.
2.  **Level 1 (Board):** The 4x10 container is slightly recessed or defined by a soft inner shadow, creating a "tray" for the pieces.
3.  **Level 2 (Cards/Tiles):** Game pieces use a 4px vertical offset shadow with low opacity (10-15%) and a slight tint of the primary blue to make them appear lifted.
4.  **Level 3 (Active/Hover):** When a user interacts with a card, the shadow should deepen and expand (8px offset), simulating the physical act of picking up a game piece.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners entirely to maintain a friendly, approachable persona. 

Base components like buttons and small cards use a 0.5rem (8px) radius. Larger containers, such as the main 4x10 game board or modal overlays, use "rounded-xl" (1.5rem / 24px) to create a soft, encased feeling. This high level of roundedness complements the Lexend typeface and reinforces the "safe to fail" learning environment.

## Components

### Cards (Game Tiles)
Cards are the primary interaction unit. They must feature a white background with a subtle 1px border colored `neutral_200`. On tap/click, they should exhibit a "press" animation where the shadow disappears and the card shifts 2px downward.

### Buttons
Buttons should feel "squishy." Use a thick 4px bottom border (a darker shade of the button's background color) to create a 3D effect. When pressed, the button translates down, and the bottom border disappears, mimicking a mechanical switch.

### Progress Trackers
The 10-row progression should be visualized by a vertical track on the side of the 4x10 grid. As the user completes a row, the corresponding segment should transition from a neutral slate to "Growth Green."

### Chips
Use chips for word banks or grammar categories. These should be pill-shaped with light-colored backgrounds (e.g., light blue background with dark blue text) to differentiate them from the more substantial Game Tiles.

### Feedback Modals
Success or error messages should slide in from the bottom. They use "rounded-xl" corners and high-contrast backgrounds (Green for success, Blue for information) to ensure the learner instantly recognizes the result of their action.