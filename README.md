# Template Printing MVP

Browser-local MVP for reusable PDF-based variable printing.

## Run locally

```bash
npm.cmd install
npm.cmd run dev -- --port 5173
```

Open http://localhost:5173.

## Build

```bash
npm.cmd run build
```

## GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Build and deployment` -> `Source` to `GitHub Actions`.
4. Push to the `main` branch.

The workflow runs `npm ci`, `npm run build`, and publishes `dist`.

## Docker

```bash
docker build -t template-printing-mvp .
docker run --rm -p 8080:80 template-printing-mvp
```

The Docker image serves the static Vite build with nginx. The MVP still stores data in the browser; the code keeps storage isolated so a cloud API can replace it later.

## Test fixtures

`sample-template.pdf` and `sample-data.csv` are included as small local fixtures for trying the flow quickly.
