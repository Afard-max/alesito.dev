# Personal Portfolio - alesito.dev

This repository contains the source code for my personal portfolio website, live at [alesito.dev](https://alesito.dev). It's a modern, performant, and multilingual site built with [Astro](https://astro.build/).

## ✨ Key Features

- **🚀 Astro-Powered**: Built with the Astro web framework for a fast, content-focused experience with excellent performance (zero JavaScript by default).
- **🌐 Multilingual Support**: Fully implemented internationalization (i18n) for English and Spanish content, with a language switcher component.
- **🎨 Component-Based Architecture**: The UI is organized into reusable Astro components found in `src/components`, including a particle canvas background and a tech stack ticker.
- **💻 Tech Showcase**: Displays my technical skills and social profiles using data from TypeScript files in `src/data`.
- **🔧 TypeScript Integration**: The entire project uses TypeScript for robust and maintainable code.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Standard CSS with modular stylesheets.
- **Deployment**: (You can add your deployment platform here, e.g., Vercel, Netlify)

## 📂 Project Structure

The project follows a standard Astro project structure:

```
/
├── public/              # Static assets (favicons, images)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/            # Project data (profile, social links, tech stack)
│   ├── i18n/            # Internationalization (JSON files and utils)
│   ├── layouts/         # Base page layouts
│   ├── pages/           # Site pages and routing
│   └── styles/          # Global and component styles
├── astro.config.mjs     # Astro configuration
└── package.json         # Project dependencies and scripts
```

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/alex-rd/alesito.dev.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd alesito.dev
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, usually at `http://localhost:4321`.

### Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the site for production.
- `npm run preview`: Serves the production build locally for previewing.

## ✒️ Author

- **Alexander Ruiz Diaz**
- **Email**: [af.alexander.rd@gmail.com](mailto:af.alexander.rd@gmail.com)
