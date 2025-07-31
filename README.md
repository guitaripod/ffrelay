# Final Fantasy Series Relay Race X

A beautiful static website for the Final Fantasy Series Relay Race X event, showcasing all event information including schedules, runners, and past events.

## Features

- **Complete Event Information**: Displays all data from the Excel file
- **Responsive Design**: Beautiful layout that works on all devices
- **Smooth Animations**: Subtle transitions and hover effects
- **Team Colors**: Visual distinction between Team Mog, Team Choco, and Team Tonberry
- **Timezone Support**: Schedule viewer with EDT, CEST, and JST times
- **Past Events Archive**: Links to all previous relay races

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `/src/pages/` - Main pages (index.astro)
- `/src/components/` - Reusable Astro components
- `/src/layouts/` - Page layouts
- `/src/data/` - Excel data extracted as JSON
- `/public/` - Static assets
- `/dist/` - Built site (generated)

## Deployment

The built site in the `dist/` directory can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.