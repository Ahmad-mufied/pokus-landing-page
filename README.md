# Project Landing Page

A modern, interactive landing page built with Next.js and Tailwind CSS.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Running Tests](#running-tests)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)

## Getting Started

Instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: Version `20.17.0` is recommended (as specified in the `.nvmrc` file). You can use a tool like [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage Node.js versions.
*   **npm** (Node Package Manager) or **yarn**: These come bundled with Node.js. This project uses `npm` according to the `package-lock.json`.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    **(Remember to replace `<repository-url>` with the actual URL of this repository and `<repository-directory>` with the name you want for the local folder, typically the repository name).**

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    (If you prefer using yarn, and a `yarn.lock` file exists or you initialize it, you can use `yarn install`)

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will typically start the server on `http://localhost:3000`. Open this URL in your web browser to see the application.
The development server uses Next.js with Turbopack for fast refresh and optimized performance.

## Running Tests

This project uses [Jest](https://jestjs.io/) for testing. To run the automated tests, execute the following command in your terminal:

```bash
npm test
```

This command will run all test files (typically those ending in `.test.ts`, `.spec.ts`, `.test.tsx`, or `.spec.tsx`) and output the results to the console.

## Tech Stack

This project is built with a modern web development stack:

*   **Framework**: [Next.js](https://nextjs.org/) (v15.3.4) - A React framework for building server-side rendered and statically generated web applications.
*   **Language**: [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static typing.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) - A utility-first CSS framework for rapid UI development.
    *   Includes `tailwindcss-animate` for animations.
*   **UI Components**:
    *   [Radix UI](https://www.radix-ui.com/) (specifically `@radix-ui/react-accordion`) - For accessible and unstyled UI primitives.
    *   Custom components in `src/components/ui/`.
*   **Animation**:
    *   [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
*   **Testing**: [Jest](https://jestjs.io/) - A JavaScript testing framework.
    *   With [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components.
*   **Linting**: [ESLint](https://eslint.org/) - For identifying and reporting on patterns in JavaScript/TypeScript.
*   **Package Manager**: [npm](https://www.npmjs.com/) (Node Package Manager)
*   **Development Server**: Next.js with [Turbopack](https://turbo.build/pack) for optimized development performance.

## Deployment

This project is configured for deployment on [Netlify](https://www.netlify.com/).

The `netlify.toml` file in the root of the project contains the necessary build settings:
```toml
[build]
  command = "next build"  # Specifies the build command
  publish = ".next"       # Specifies the directory to publish

[[plugins]]
  package = "@netlify/plugin-nextjs" # Essential plugin for Next.js sites on Netlify
```

To deploy this project to Netlify:

1.  **Connect your Git repository to Netlify**:
    *   Push your project to a GitHub, GitLab, or Bitbucket repository.
    *   Go to your Netlify dashboard and click "Add new site" -> "Import an existing project".
    *   Choose your Git provider and select the repository.

2.  **Configure build settings (usually auto-detected)**:
    *   Netlify should automatically detect the settings from `netlify.toml`.
    *   The **Build command** should be `next build`.
    *   The **Publish directory** should be `.next`.
    *   The `@netlify/plugin-nextjs` will be installed automatically if listed in `netlify.toml`, or you might need to add it via the Netlify UI or by including it in your `package.json`'s dependencies.

3.  **Deploy**:
    *   Click "Deploy site". Netlify will then build and deploy your project.

Any pushes to the connected branch (e.g., `main` or `master`) will trigger automatic redeployments. You can also set up deploy previews for pull requests.
