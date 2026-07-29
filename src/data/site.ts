export const site = {
  name: 'Johandry Viles',
  shortName: 'Johandry',
  email: 'johalop858@gmail.com',
  github: 'https://github.com/JohandryViles',
  linkedin: 'https://linkedin.com/in/johandryviles',
  facebook: 'https://www.facebook.com/johandry.viles/',
  instagram: 'https://www.instagram.com/somethingwith_j/',
  whatsapp:
    'https://wa.me/593961065204?text=Hola,%20vengo%20desde%20tu%20sitio%20web.',
  location: {
    lat: -1.05,
    lng: -80.47,
  },
} as const;

export const socials = [
  { id: 'github', label: 'Github', href: site.github },
  { id: 'linkedin', label: 'Linkedin', href: site.linkedin },
  { id: 'email', label: 'E-mail', href: `mailto:${site.email}` },
] as const;

export const footerSocials = [
  ...socials,
  { id: 'whatsapp', label: 'WhatsApp', href: site.whatsapp },
  { id: 'facebook', label: 'Facebook', href: site.facebook },
  { id: 'instagram', label: 'Instagram', href: site.instagram },
] as const;

export type StackGroup = {
  id: 'tech' | 'databases' | 'tools';
  highlight?: boolean;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    id: 'tech',
    highlight: true,
    items: [
      'Python',
      'JavaScript',
      'Java',
      'HTML5',
      'CSS3',
      'Google Cloud',
      'Figma',
      'Node.js',
      'React',
      'TypeScript',
      'Linux',
      'Docker',
      'Azure',
      'Next.js',
      'Amazon AWS',
    ],
  },
  {
    id: 'databases',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    id: 'tools',
    items: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Eclipse',
      'Notion',
      'Notepad++',
      'Markdown',
      'Cursor',
    ],
  },
];

export type LocalizedCopy = {
  es: string;
  en: string;
};

export type ProjectCaseStudy = {
  intro: LocalizedCopy;
  overview: LocalizedCopy;
  challenge: LocalizedCopy;
  solution: LocalizedCopy;
  results: LocalizedCopy;
};

export type ProjectGalleryItem = {
  id: string;
  src: string | null;
  alt: LocalizedCopy;
  caption: LocalizedCopy;
};

export type Project = {
  id: string;
  title: LocalizedCopy;
  description: LocalizedCopy;
  tags: string[];
  accent: 'violet' | 'teal' | 'amber';
  caseStudy: ProjectCaseStudy;
  gallery: ProjectGalleryItem[];
};

const createPlaceholderCaseStudy = (): ProjectCaseStudy => ({
  intro: {
    es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo sed neque facilisis posuere vel at erat.',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo sed neque facilisis posuere vel at erat.',
  },
  overview: {
    es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada, neque vitae luctus luctus, nibh justo vulputate nisl, vitae tincidunt sapien eros sed arcu.',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada, neque vitae luctus luctus, nibh justo vulputate nisl, vitae tincidunt sapien eros sed arcu.',
  },
  challenge: {
    es: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec posuere sem at tellus faucibus, sed feugiat lorem tincidunt.',
    en: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec posuere sem at tellus faucibus, sed feugiat lorem tincidunt.',
  },
  solution: {
    es: 'Curabitur euismod, magna non commodo volutpat, justo erat feugiat velit, at consequat lectus lacus a nibh. Aliquam erat volutpat.',
    en: 'Curabitur euismod, magna non commodo volutpat, justo erat feugiat velit, at consequat lectus lacus a nibh. Aliquam erat volutpat.',
  },
  results: {
    es: 'Vivamus vitae sapien sed neque gravida faucibus. Praesent ullamcorper, mauris quis porttitor feugiat, justo nulla finibus lacus, a posuere est erat non lorem.',
    en: 'Vivamus vitae sapien sed neque gravida faucibus. Praesent ullamcorper, mauris quis porttitor feugiat, justo nulla finibus lacus, a posuere est erat non lorem.',
  },
});

const createPlaceholderGallery = (): ProjectGalleryItem[] => [
  {
    id: 'main-view',
    src: null,
    alt: {
      es: 'Marcador de posición para la vista principal del proyecto.',
      en: 'Placeholder for the project main view.',
    },
    caption: {
      es: 'Vista principal',
      en: 'Main view',
    },
  },
  {
    id: 'interface-detail',
    src: null,
    alt: {
      es: 'Marcador de posición para un detalle de la interfaz.',
      en: 'Placeholder for an interface detail.',
    },
    caption: {
      es: 'Detalle de interfaz',
      en: 'Interface detail',
    },
  },
  {
    id: 'project-flow',
    src: null,
    alt: {
      es: 'Marcador de posición para el flujo principal del proyecto.',
      en: 'Placeholder for the project main flow.',
    },
    caption: {
      es: 'Flujo del proyecto',
      en: 'Project flow',
    },
  },
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: {
      es: 'Portfolio personal con Astro + i18n',
      en: 'Personal portfolio with Astro + i18n',
    },
    description: {
      es: 'Sitio estático bilingüe, globo 3D y despliegue continuo en Vercel.',
      en: 'Bilingual static site, 3D globe, and continuous deploy on Vercel.',
    },
    tags: ['Astro', 'TypeScript', 'Cobe'],
    accent: 'violet',
    caseStudy: createPlaceholderCaseStudy(),
    gallery: createPlaceholderGallery(),
  },
  {
    id: 'api-starter',
    title: {
      es: 'API starter con Node y TypeScript',
      en: 'API starter with Node and TypeScript',
    },
    description: {
      es: 'Base lista para autenticación, validación y una estructura que escala.',
      en: 'A base ready for auth, validation, and a structure that scales.',
    },
    tags: ['Node.js', 'TypeScript'],
    accent: 'teal',
    caseStudy: createPlaceholderCaseStudy(),
    gallery: createPlaceholderGallery(),
  },
  {
    id: 'campus-tool',
    title: {
      es: 'Herramienta para el semestre universitario',
      en: 'Campus tool for the university semester',
    },
    description: {
      es: 'Idea en progreso para organizar tareas, recursos y fechas del ciclo.',
      en: 'Work-in-progress idea to organize tasks, resources, and term dates.',
    },
    tags: ['React', 'PostgreSQL'],
    accent: 'amber',
    caseStudy: createPlaceholderCaseStudy(),
    gallery: createPlaceholderGallery(),
  },
];
