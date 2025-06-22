# Product Requirements Document: Landing Page UI/UX Enhancement

## 1. Introduction & Overview

This document outlines the requirements for a significant UI/UX enhancement of the Pokus landing page. The goal is to evolve the current design into a more modern, visually engaging, and professional experience, taking direct inspiration from the provided reference image.

This initiative will focus on implementing a "glassmorphism" aesthetic, refined micro-interactions, and improved visual hierarchy across all sections, while leveraging the existing brand colors defined in `tailwind.config.ts` and drawing inspiration from component libraries like **Shadcn UI, React Bits, and Aceternity UI**.

## 2. Goals

*   **Primary Goal:** Transform the landing page's visual identity to be premium, modern, and captivating, mirroring the provided design reference to increase user trust and engagement.
*   **Secondary Goal:** Enhance the User Experience (UX) by introducing fluid animations, micro-interactions, and a clearer visual flow, making the page feel more dynamic and intuitive.
*   **Tertiary Goal:** Ensure the enhanced design is fully responsive, accessible, and performs smoothly across all modern devices and browsers.

## 3. User Stories

*   **As a first-time visitor,** I want to be immediately impressed by a visually stunning and professional design so that I feel confident in the quality of the product.
*   **As a user scrolling through the page,** I want to experience smooth transitions and subtle animations that guide my attention and make the exploration feel engaging and delightful.
*   **As a potential user on a mobile device,** I want the same high-quality, visually appealing, and easy-to-navigate experience as on a desktop.

## 4. General UI/UX Requirements

These principles should be applied globally across the landing page.

*   **Glassmorphism:** Core sections and cards should utilize a "frosted glass" effect. This will be achieved using semi-transparent backgrounds with a `backdrop-blur` filter and a subtle border.
*   **Glow Effects:** Subtle, colorful glows should be used behind key elements (like cards and in the hero background) to add depth and highlight sections. The glow color should be derived from the `--primary` color variable.
*   **Micro-interactions:** All interactive elements (buttons, links, cards) must have smooth `transition` effects and subtle `hover` and `focus` states (e.g., slight lift, glow intensification, or color change).
*   **Typography:** Maintain the existing font stack (`Inter`, `Source Serif 4`) but refine the type scale (sizes, weights, and line heights) for better visual hierarchy and readability, as seen in the reference image.
*   **Responsiveness:** All enhancements must be implemented with a mobile-first approach, ensuring the design gracefully adapts from small phone screens to large desktop monitors.

## 5. Section-Specific Enhancements

### 5.1. Navigation & Header
*   A clean, floating header that becomes slightly opaque on scroll.
*   The "Pokus" logo on the left.
*   Navigation links (`Product`, `Features`, `Pricing`, etc.) in the center.
*   A primary "Add to Chrome" button on the right, matching the main CTA style.

### 5.2. Hero Section (`hero.tsx`)
*   **Layout:** A two-column layout. The left side will contain the main headline and CTA, and the right side will feature the primary visual.
*   **Background:** A dark background with a large, soft, radial gradient glow (using the primary color) positioned behind the visual element.
*   **Visual Element:** A large "glassmorphism" card on the right, appearing to float over the glowing background. This card will contain a stylized representation of the Pokus extension UI.
*   **CTA:** The primary button should have a prominent style with a subtle hover effect (e.g., a slight scale-up and brighter glow). Include small, secondary text below the button for social proof (e.g., "★★★★★ • 1,000+ users").

### 5.3. Features & Benefits Sections (`features.tsx`, `benefits.tsx`)
*   **Layout:** A 3 or 4-column grid.
*   **Cards:** Refactor the existing cards to use the glassmorphism style.
*   **Interaction:** On hover, the cards should have a subtle "lift" effect (`transform: scale(1.03)`) and their border or an underlying glow should become more prominent.
*   **Icons:** Use clean, modern icons from the `lucide-react` library.

### 5.4. Testimonials Section (`testimonials.tsx`)
*   **Layout:** Implement a horizontally scrolling carousel for the testimonials (similar to Aceternity UI's offerings).
*   **Cards:** Each testimonial will be on a glassmorphism card, featuring the quote, user name, and role.
*   **Interaction:** The carousel should be draggable on desktop and swipable on touch devices.

### 5.5. FAQ Section (`faq.tsx`)
*   **Component:** Implement a stylish accordion using the patterns from Shadcn UI.
*   **Styling:** Each accordion item should have a clean, minimalist design with a clear visual distinction between the question and the answer. The open/close animation should be smooth.

## 6. Technical Considerations

*   **Animation Library:** Introduce `framer-motion` to handle more complex animations and transitions gracefully (e.g., staggered loading of cards, complex hover effects).
*   **Styling:** Continue using Tailwind CSS. The glassmorphism and glow effects will be implemented using utility classes (`backdrop-blur`, `bg-opacity`, custom gradient classes).

## 7. Success Metrics

*   **Quantitative:** Improvement in user engagement metrics (e.g., lower bounce rate, increased average time on page).
*   **Qualitative:** Positive user feedback regarding the new design's modern feel and professionalism. 