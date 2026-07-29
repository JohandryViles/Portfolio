# Johandry Viles — Portfolio

Portfolio personal en **Astro** + React islands + Tailwind, con i18n **ES/EN**, globo 3D (Cobe) apuntando a Manta, Ecuador, y deploy en **Vercel**.

## Stack

- Astro 7 (static)
- React (isla del globo)
- Tailwind CSS 4
- TypeScript
- Cobe
- Vercel + GitHub Actions CI

## Desarrollo local

```sh
npm install
npm run dev
```

Abre `http://localhost:4321` — redirige a `/es`. Inglés en `/en`.

### Scripts

| Comando | Acción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Preview del build |
| `npm run check` | Typecheck (`astro check`) |

## i18n

- Locales: `es` (default), `en`
- Copy: `src/i18n/ui.ts`
- Datos (stack, proyectos, socials): `src/data/site.ts`

## Deploy en Vercel (CD)

1. Push este repo a GitHub (`JohandryViles/Portfolio`).
2. En [vercel.com](https://vercel.com) → **Add New Project** → Import el repo.
3. Framework preset: **Astro** (build: `npm run build`, output: `dist`).
4. Deploy. Cada push a `main` publica producción; cada PR genera preview.

No se requieren variables de entorno para el MVP.

## CI

GitHub Actions (`.github/workflows/ci.yml`) corre en push/PR a `main`:

1. `npm ci`
2. `npm run check`
3. `npm run build`

## Estructura

```text
src/
  components/     # Secciones + LanguageSwitcher + LocationGlobe
  data/site.ts    # Contenido editable
  i18n/           # Diccionarios ES/EN
  layouts/
  pages/es|en/
  styles/global.css
```
