# Shodashi

Shodashi is a content-driven educational website built with Next.js and designed for static deployment.

## Tech Stack

- **Next.js 16** (App Router) - React framework with static export
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

Build the static site:
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

Shodashi is configured for deployment to **Azure Static Web Apps** using Next.js static export.

### Static Export Configuration

The project uses `output: "export"` in `next.config.mjs`, which:
- Generates a fully static site in the `out/` directory
- Disables Next.js Image Optimization API (not supported by Azure Static Web Apps)
- Creates static HTML files for all routes

### Deployment Steps

1. Build the static site: `npm run build`
2. Deploy the `out/` directory to Azure Static Web Apps
3. All routes (`/`, `/about`, `/goals`, `/contact`) are pre-rendered as static HTML
