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

export type Project = {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  accent: 'violet' | 'teal' | 'amber';
};

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
  },
];
