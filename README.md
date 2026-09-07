# AI Personnel Wellness Monitor

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Render deployment

This repository includes `render.yaml` for a Render Static Site deployment. In Render, choose **New > Blueprint** and select this repository. Render will run `npm run build`, publish `dist`, and rewrite application routes to `index.html` so direct links such as `/dashboard` continue to work.

For a manual Static Site setup, use:

- Build command: `npm run build`
- Publish directory: `dist`
- Rewrite: `/*` -> `/index.html`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
