## Relevant Files

- `tailwind.config.ts` - To add custom animation keyframes and utilities for glow and glassmorphism effects.
- `src/styles/globals.css` - For any global style adjustments, like the base background color.
- `src/components/sections/header.tsx` - A new component for the site's primary navigation.
- `src/components/sections/hero.tsx` - To be refactored with the new two-column layout, glow effects, and glassmorphism card.
- `src/components/sections/features.tsx` - To be refactored with glassmorphism cards and hover animations.
- `src/components/sections/benefits.tsx` - To be refactored with glassmorphism cards and hover animations.
- `src/components/ui/accordion.tsx` - A new reusable component for the FAQ section, based on Shadcn UI patterns.
- `src/components/sections/faq.tsx` - To be refactored to use the new Accordion component.
- `src/components/sections/testimonials.tsx` - To be refactored into a horizontally scrolling carousel.
- `src/app/page.tsx` - To add the new `Header` component to the main layout.
- `package.json` - To add new dependencies like `framer-motion`.

### Notes

- This refactoring will heavily rely on adding custom styles and animations.
- Use `npm test` or `npx jest` to run tests. Running without a path executes all tests found by the Jest configuration.

## Tasks

- [x] 1.0 Project Refinement & Dependency Setup
  - [x] 1.1 Install `framer-motion` for advanced animations (`npm install framer-motion`).
  - [x] 1.2 Install Radix UI for the accordion component (`npm install @radix-ui/react-accordion`).
  - [x] 1.3 Create the new `src/components/sections/header.tsx` file for the navigation bar.

- [x] 2.0 Global Styling & Animation Foundation
  - [x] 2.1 In `tailwind.config.ts`, add new keyframes for glow and subtle floating animations.
  - [x] 2.2 In `globals.css`, set the base `background` color to a dark shade to match the reference (e.g., `oklch(0.1 0.05 250)`).
  - [x] 2.3 Refactor the base `Card` component (`src/components/ui/card.tsx`) to include default styles for the glassmorphism effect (e.g., `backdrop-blur-sm border bg-white/5`).
  - [x] 2.4 Create a new `ShineBorder` component in `src/components/ui/` based on Aceternity UI patterns for use on cards and buttons.

- [x] 3.0 Header and Hero Section Overhaul
  - [x] 3.1 Implement the `Header` component with the logo, navigation links, and a CTA button, making it float and have a semi-transparent background on scroll.
  - [x] 3.2 Update `src/app/page.tsx` to include the new `Header` component.
  - [x] 3.3 Refactor the `Hero` section to use the two-column layout.
  - [x] 3.4 Add the background radial glow effect to the `Hero` section.
  - [x] 3.5 Implement the enhanced CTA button with social proof text below it.

- [ ] 4.0 Interactive Content Sections Refactor
  - [ ] 4.1 Refactor the `Features` and `Benefits` sections to use the updated glassmorphism `Card` component.
  - [ ] 4.2 Add `framer-motion` to the `Features` and `Benefits` cards to create a staggered entrance animation and a subtle "lift" on hover.
  - [ ] 4.3 Create the reusable `Accordion` component in `src/components/ui/accordion.tsx` using Radix UI and Shadcn UI patterns.
  - [ ] 4.4 Refactor the `FAQ` section to use the new `Accordion` component.
  - [ ] 4.5 Refactor the `Testimonials` section to be a draggable horizontal carousel.

- [ ] 5.0 Final Polish, Responsiveness, and Review
  - [ ] 5.1 Thoroughly test the responsiveness of all enhanced sections on mobile, tablet, and desktop viewport sizes.
  - [ ] 5.2 Add `aria-label` attributes and ensure keyboard navigation is logical for all new interactive components (Header, Accordion, Carousel).
  - [ ] 5.3 Review all animations and transitions for smoothness and performance.
  - [ ] 5.4 Conduct a final design review against the reference image and the PRD to ensure all requirements have been met. 