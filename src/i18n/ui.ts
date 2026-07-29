export const languages = {
  es: 'Es',
  en: 'En',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Johandry Viles — Full-stack Developer',
    'meta.description':
      'Portfolio de Johandry Viles, estudiante de Ingeniería en Software y desarrollador full-stack.',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.location': 'Ubicación',
    'nav.contact': 'Contacto',
    'hero.line1': 'Full-stack',
    'hero.line2': 'Developer',
    'hero.cta': 'Proyectos',
    'hero.tagline':
      'Mi meta es <em>escribir código mantenible y limpio</em> para que el desarrollo sea <em>entendible y agradable</em>.',
    'about.crumb': '... / Sobre mí ...',
    'about.intro':
      '¡Hola! Soy Johandry, soy un <em>desarrollador full-stack</em>. Estudiante de <em>Ingeniería en Software</em>.',
    'about.note':
      'Algunas de mis <em>tecnologías, temas y herramientas favoritas</em> con las que trabajo.',
    'about.photoAlt':
      'Retrato profesional de Johandry Viles, estudiante de Ingeniería en Software, con camisa gris sobre fondo oscuro.',
    'stack.tech': 'Stack de tecnologías',
    'stack.databases': 'Bases de datos',
    'stack.tools': 'Control de versiones y herramientas',
    'projects.title': 'Proyectos',
    'projects.comingSoon': 'Próximamente',
    'projects.readMore': 'Leer más',
    'projects.prev': 'Anterior',
    'projects.next': 'Siguiente',
    'location.eyebrow': 'Full-stack developer · Ingeniería en Software',
    'location.label': 'Ubicado en',
    'location.city': 'Manta, Manabí, Ecuador',
    'location.coords': "01°03' S, 80°28' O",
    'location.tz': 'GMT-5',
    'contact.crumb': '... / Contacto ...',
    'contact.role': 'Full-stack developer',
    'contact.navMain': 'Inicio',
    'contact.siteTitle': 'Sitio',
    'contact.siteHandcrafted': 'Hecho a mano por mí /',
    'contact.sitePowered': 'Powered by Astro',
    'contact.email': 'E-mail',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'meta.title': 'Johandry Viles — Full-stack Developer',
    'meta.description':
      'Portfolio of Johandry Viles, Software Engineering student and full-stack developer.',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'hero.line1': 'Full-stack',
    'hero.line2': 'Developer',
    'hero.cta': 'Projects',
    'hero.tagline':
      'My goal is to <em>write maintainable, clean</em> and <em>understandable code</em> so development stays enjoyable.',
    'about.crumb': '... / About me ...',
    'about.intro':
      "Hello! I'm Johandry, I'm a <em>full-stack developer</em>. Studying <em>Software Engineering</em>.",
    'about.note':
      'Some of my <em>favorite technologies, topics, or tools</em> that I work with.',
    'about.photoAlt':
      'Professional portrait of Johandry Viles, Software Engineering student, wearing a gray shirt against a dark background.',
    'stack.tech': 'Tech Stack',
    'stack.databases': 'Databases',
    'stack.tools': 'Version Control & Tools',
    'projects.title': 'Projects',
    'projects.comingSoon': 'Coming soon',
    'projects.readMore': 'Read more',
    'projects.prev': 'Previous',
    'projects.next': 'Next',
    'location.eyebrow': 'Full-stack developer · Software Engineering',
    'location.label': 'Based in',
    'location.city': 'Manta, Manabí, Ecuador',
    'location.coords': "01°03' S, 80°28' W",
    'location.tz': 'GMT-5',
    'contact.crumb': '... / Contacts ...',
    'contact.role': 'Full-stack developer',
    'contact.navMain': 'Main',
    'contact.siteTitle': 'Site',
    'contact.siteHandcrafted': 'Handcrafted by ME /',
    'contact.sitePowered': 'Powered by Astro',
    'contact.email': 'E-mail',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
