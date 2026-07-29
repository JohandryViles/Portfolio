import { defaultLang, ui, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

const localizedRouteSegments: Record<Lang, Record<string, string>> = {
  es: {
    projects: 'proyectos',
    proyectos: 'proyectos',
  },
  en: {
    projects: 'projects',
    proyectos: 'projects',
  },
};

/** Swap locale while preserving hash/section when possible. */
export function switchLocalePath(currentPath: string, targetLang: Lang): string {
  const hashIndex = currentPath.indexOf('#');
  const hash = hashIndex >= 0 ? currentPath.slice(hashIndex) : '';
  const pathOnly = hashIndex >= 0 ? currentPath.slice(0, hashIndex) : currentPath;
  const segments = pathOnly.split('/').filter(Boolean);
  if (segments[0] === 'es' || segments[0] === 'en') {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }

  if (segments[1]) {
    segments[1] =
      localizedRouteSegments[targetLang][segments[1]] ?? segments[1];
  }

  return `/${segments.join('/')}${hash}`;
}
