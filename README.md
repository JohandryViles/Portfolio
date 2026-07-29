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

## Deploy en Vercel

**Producción:** [devjohandry.vercel.app](https://devjohandry.vercel.app)

### CLI (manual)

```sh
npm install -g vercel@latest
vercel link --project devjohandry   # primera vez
vercel deploy --prod
```

### CI/CD (GitHub + Vercel)

| Capa | Qué hace |
| --- | --- |
| **CI** (GitHub Actions) | En cada push/PR a `main`: `npm ci` → `check` → `build`. |
| **CD** (Vercel) | El repo [Portfolio](https://github.com/JohandryViles/Portfolio) está conectado al proyecto **devjohandry**. Push a `main` → producción; PR → preview. |

Si quieres desplegar a mano:

```sh
vercel deploy --prod
```

Build en Vercel: `npm run build` · Output: `dist` (Astro estático).

No se requieren variables de entorno para el MVP.

## CI (local)

Mismos pasos que el job `quality` en Actions:

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
