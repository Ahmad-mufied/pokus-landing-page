# Product Requirements Document: Pokus Landing Page

## 1. Introduction & Overview

This document outlines the requirements for the landing page of "Pokus," a Chromium extension designed to help users stay focused and productive. The extension's core features include a site blocker, a Pomodoro timer, and ambient background sounds. The primary purpose of this landing page is to serve as the main marketing and informational hub for Pokus, with the ultimate goal of driving users to install the extension from the Chrome Web Store.

## 2. Goals

*   **Primary Goal:** Drive a high number of downloads/installations of the Pokus extension from the Chrome Web Store.
*   **Secondary Goal:** Clearly and effectively educate potential users on the features, benefits, and use cases of Pokus.
*   **Tertiary Goal:** Establish a professional and trustworthy brand presence for Pokus.

## 3. User Stories

*   **As a student preparing for exams,** I want to quickly understand how Pokus can block distracting websites so I can decide if it will help me focus on my studies.
*   **As a professional developer working from home,** I want to see how the Pomodoro timer and ambient sounds work together so I can determine if it will improve my deep work sessions.
*   **As a potential user who has heard about Pokus,** I want to find the "Add to Chrome" button easily so I can install it without having to search for it.
*   **As a freelancer,** I want to see testimonials from other users to feel confident that the extension is effective and reliable before installing it.

## 4. Functional Requirements

The landing page will be a single-page website composed of the following sections, ordered as listed below.

### 4.1. Hero Section
*   **Headline:** To be provided by the team. A placeholder like "Regain Your Focus, Master Your Time" can be used initially.
*   **Sub-headline:** A brief, one-sentence description of Pokus (e.g., "The all-in-one Chromium extension to block distractions, manage your time with the Pomodoro technique, and create a focused work environment.").
*   **Primary Call-to-Action (CTA):** A prominent button with the text "Add to Chrome for Free" that links directly to the Pokus page on the Chrome Web Store.
*   **Visuals:** A clean, engaging visual representation of the Pokus extension UI, perhaps a stylized screenshot or abstract graphic.

### 4.2. Main Features Section
This section will highlight the three core features of the extension.
*   **Site Blocker:**
    *   Description: Explain how users can create custom blacklists to block distracting sites and whitelists for exceptions.
    *   Visual: A simple graphic or icon representing security or blocking.
*   **Pomodoro Timer:**
    *   Description: Detail the customizable Pomodoro timer for managing focus and break sessions. Mention the ability to start, pause, and reset.
    *   Visual: An icon representing time or a clock.
*   **Ambient Sounds:**
    *   Description: Describe the library of background sounds (rain, nature, etc.) and the ability to mix them to create the perfect work atmosphere.
    *   Visual: An icon representing sound waves or headphones.

### 4.3. How-to & Demo Section
This section will visually demonstrate the extension's functionality.
*   **Requirement 1:** Display short, silent, auto-playing video loops (GIF-style) for each of the three main features, showing them in action.
*   **Requirement 2:** Embed a single, comprehensive (but short, ~60-90 seconds) video that showcases a complete user workflow, demonstrating how the features work together.

### 4.4. Benefits & Advantages Section
This section will focus on the value proposition.
*   **Content:** Use bullet points or small cards to highlight key benefits like "Increase Productivity," "Reduce Distractions," "Avoid Burnout," and "Build Focus Habits."

### 4.5. Testimonials Section
This section will build social proof.
*   **Content:** Display 5 testimonials.
*   **Requirement:** Use placeholder text for the testimonials initially. Each testimonial should include a placeholder name and role (e.g., "Alex, Software Developer").

### 4.6. FAQ (Frequently Asked Questions)
This section will address common user questions.
*   **Content:** Include 4-5 common questions with clear, concise answers.
    *   Example Q1: Is Pokus free to use?
    *   Example Q2: What browsers does Pokus support?
    *   Example Q3: Is my data safe?

### 4.7. Our Team Section
This section will introduce the creators.
*   **Content:** Display a grid of 4 team members.
*   **Requirement:** Each member's card must contain:
    1.  A professional photo (placeholder acceptable).
    2.  Name.
    3.  Role (e.g., "Lead Developer," "UI/UX Designer").
    4.  Links to their LinkedIn and GitHub profiles.

### 4.8. Final Call-to-Action (CTA)
*   **Content:** A final, strong message encouraging users to install the extension.
*   **CTA Button:** A large, prominent "Add to Chrome for Free" button, identical to the one in the hero section.

### 4.9. Footer
*   **Content:** The footer must include:
    *   Copyright notice (e.g., "© 2024 Pokus Team").
    *   Links to a Privacy Policy and Terms of Service page (these pages can be created later).
    *   Social media icons linking to the project's official profiles (if any).

## 5. Non-Goals (Out of Scope)

*   A user authentication system or user accounts on the website itself.
*   A blog or content section beyond the single landing page.
*   Complex, performance-heavy animations.
*   Multi-language support (the initial version will be in English only).
*   An integrated payment system.

## 6. Design & UI/UX Considerations

*   **Overall Style:** Modern, minimalist, clean, and professional with rounded elements. The design should feel approachable and intuitive.
*   **Inspiration:** The aesthetic should draw inspiration from modern UI frameworks like **Shadcn UI, React Bits, and Aceternity UI**.
*   **Responsiveness:** The layout must be fully responsive and optimized for a seamless experience on all major devices, including desktops, tablets, and mobile phones.
*   **Color Palette:** The provided color palette must be implemented for both light and dark modes. The website should respect the user's system theme preference.
    ```css
    /* Light Mode */
    :root {
      --background: oklch(1.0000 0 0);
      --foreground: oklch(0.3211 0 0);
      --card: oklch(1.0000 0 0);
      --primary: oklch(0.6231 0.1880 259.8145);
      --primary-foreground: oklch(1.0000 0 0);
      --secondary: oklch(0.9670 0.0029 264.5419);
      --secondary-foreground: oklch(0.4461 0.0263 256.8018);
      --border: oklch(0.9276 0.0058 264.5313);
      --ring: oklch(0.6231 0.1880 259.8145);
    }
    /* Dark Mode */
    .dark {
      --background: oklch(0.2046 0 0);
      --foreground: oklch(0.9219 0 0);
      --card: oklch(0.2686 0 0);
      --primary: oklch(0.6231 0.1880 259.8145);
      --primary-foreground: oklch(1.0000 0 0);
      --secondary: oklch(0.2686 0 0);
      --secondary-foreground: oklch(0.9219 0 0);
      --border: oklch(0.3715 0 0);
      --ring: oklch(0.6231 0.1880 259.8145);
    }
    ```
*   **Typography:**
    *   **Sans-serif (for headings & UI):** `Inter`
    *   **Serif (for body text, optional):** `Source Serif 4`
    *   **Mono (for code snippets, if any):** `JetBrains Mono`

## 7. Technical Considerations

*   **Frontend Framework:** Next.js with TypeScript.
*   **Styling:** Tailwind CSS.
*   **Rendering Strategy:** Utilize Static Site Generation (SSG) for the main page content for optimal performance and SEO. Server-Side Rendering (SSR) can be used if any dynamic content is needed in the future.
*   **Analytics:** Integration with a web analytics tool (Vercel Analytics) is required to track page views and CTA button clicks.

## 8. Success Metrics

*   **Primary Metric:** Click-Through Rate (CTR) on the "Add to Chrome for Free" buttons.
*   **Secondary Metrics:**
    *   Total number of unique visitors.
    *   Average time on page.
    *   Bounce rate.

## 9. Open Questions

*   What is the final copy for the hero section headline and other key text areas?
*   What are the full names, roles, and social media (LinkedIn, GitHub) URLs for the 4 team members?
*   What are the specific questions and final answers for the FAQ section? 