## Relevant Files

- `src/app/layout.tsx` - The root layout file for setting up global styles, fonts, and theme providers.
- `src/app/page.tsx` - The main entry point for the landing page that will assemble all the components.
- `src/components/ui/` - Directory for reusable UI components inspired by Shadcn/UI (e.g., Button, Card).
- `src/components/sections/hero.tsx` - The component for the hero section.
- `src/components/sections/hero.test.tsx` - Unit tests for the `hero` component.
- `src/components/sections/features.tsx` - The component for the main features section.
- `src/components/sections/features.test.tsx` - Unit tests for the `features` component.
- `src/components/sections/demo.tsx` - The component for the "How-to & Demo" section.
- `src/components/sections/benefits.tsx` - The component for the benefits section.
- `src/components/sections/testimonials.tsx` - The component for the testimonials section.
- `src/components/sections/faq.tsx` - The component for the FAQ section.
- `src/components/sections/team.tsx` - The component for the "Our Team" section.
- `src/components/sections/footer.tsx` - The component for the page footer.
- `src/components/sections/cta.tsx` - The component for the final call-to-action section.
- `tailwind.config.ts` - Tailwind CSS configuration file for defining theme colors, fonts, and other design tokens.
- `src/styles/globals.css` - Global stylesheet to define the color variables from the PRD.

### Notes

- Unit tests should be placed alongside the code files they are testing (e.g., `hero.tsx` and `hero.test.tsx` in the same directory).
- Use `npm test` or `npx jest` to run tests. Running without a path executes all tests found by the Jest configuration.

## Tasks

- [x] 1.0 Project Setup & Configuration
  - [x] 1.1 Initialize a new Next.js project with TypeScript and Tailwind CSS using `npx create-next-app@latest --typescript --tailwind --eslint`.
  - [x] 1.2 Configure `tailwind.config.ts` with the color palette, fonts (`Inter`, `Source Serif 4`), and border-radius defined in the PRD.
  - [x] 1.3 Add the light and dark mode color variables to `src/styles/globals.css`.
  - [x] 1.4 Set up a theme provider in `src/app/layout.tsx` to handle light/dark mode switching.
  - [x] 1.5 Install Vercel Analytics package: `@vercel/analytics`.

- [x] 2.0 Core Layout & Component Scaffolding
  - [x] 2.1 Create the main page layout in `src/app/page.tsx` by creating placeholders for each section.
  - [x] 2.2 Create empty component files for each section: `hero.tsx`, `features.tsx`, `demo.tsx`, `benefits.tsx`, `testimonials.tsx`, `faq.tsx`, `team.tsx`, and `footer.tsx` inside `src/components/sections/`.
  - [x] 2.3 Implement the `Footer` component with copyright info and placeholder links for Privacy Policy and Terms of Service.
  - [x] 2.4 Create a reusable `Button` component in `src/components/ui/` that matches the project's design system.
  - [x] 2.5 Create a reusable `Card` component in `src/components/ui/` for use in the Features, Benefits, and Team sections.

- [x] 3.0 Static Content Sections Implementation
  - [x] 3.1 Implement the `Hero` section UI with a placeholder headline, sub-headline, and the primary "Add to Chrome" button.
  - [x] 3.2 Implement the `Features` section, creating a card/item for each of the three core features (Site Blocker, Pomodoro Timer, Ambient Sounds).
  - [x] 3.3 Implement the `Benefits` section using cards or bullet points to list the advantages.
  - [x] 3.4 Implement the `FAQ` section using an accordion or a simple list for the questions and answers.
  - [x] 3.5 Implement the `Team` section, creating a 4-column grid with placeholders for photo, name, role, and social links.
  - [x] 3.6 Implement the final Call-to-Action section, reusing the primary button.
  

- [ ] 4.0 Media & Interactive Sections Implementation
  - [ ] 4.1 In the `Demo` section, add placeholders for the short video loops and the main demonstration video.
  - [ ] 4.2 In the `Testimonials` section, implement the UI to display 5 placeholder testimonials.
  - [ ] 4.3 Ensure all interactive elements like buttons and links have clear hover and focus states as defined in the UI design.
  - [ ] 4.4 Make the entire landing page fully responsive for tablet and mobile devices.

- [ ] 5.0 Finalization, Analytics, and Deployment
  - [ ] 5.1 Add the Vercel Analytics component to `src/app/layout.tsx`.
  - [ ] 5.2 Add tracking events to the main "Add to Chrome" buttons to measure CTR.
  - [ ] 5.3 Review the entire page to ensure it matches all requirements in the PRD.
  - [ ] 5.4 Perform a final round of testing for responsiveness, browser compatibility, and interactive elements.
  - [ ] 5.5 Create a production build using `npm run build`.
  - [ ] 5.6 Deploy the application to Vercel. 