export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}

export const siteConfig = {
  name: 'Mohammad Kaif Ali',
  title: 'Aspiring Data Analyst',
  description:
    'Premium portfolio of Mohammad Kaif Ali, an aspiring data analyst based in Dehradun, Uttarakhand, showcasing analytics projects, technical skills, certifications, education, and direct contact details.',
  location: 'Dehradun, Uttarakhand, India',
  phone: '6207136797',
  email: 'alikaif5605@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohammad-kaif-ali-387a14321',
  github: 'https://github.com/mohammadkaifali-sys',
  resumePath: '/resume',
  siteUrl: getSiteUrl()
};

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

export const aboutContent = {
  summary:
    'Aspiring Data Analyst with a strong foundation in Python, SQL, Excel, and Power BI, focused on turning raw data into clear, decision-ready insights. Comfortable translating business questions into structured analysis, dashboards, and concise narratives that help teams act quickly.',
  education:
    'Currently building expertise through formal study, hands-on project work, and continuous practice with analytics tools, data preparation, and visualization workflows. The portfolio reflects practical learning rather than placeholder content.',
  objective:
    'To join a data-driven organization where I can contribute reliable analysis, improve reporting, and grow into a high-impact analytics professional who supports better business decisions.'
};

export const skills = [
  'Python',
  'SQL',
  'Excel',
  'Power BI',
  'Pandas',
  'NumPy',
  'HTML',
  'CSS',
  'Git',
  'GitHub'
];

export const projects = [
  {
    slug: 'ev-smartbuddy',
    name: 'EV SmartBuddy',
    description:
      'A future-ready data experience concept that organizes electric vehicle insights, charging trends, and decision support into a streamlined dashboard-style product.',
    features: [
      'Interactive insight panels with trend summaries',
      'Structured analysis cards for key KPIs',
      'Responsive layout optimized for recruiters and stakeholders'
    ],
    stack: ['Python', 'SQL', 'Power BI', 'Data Storytelling'],
    githubHref: '/projects/ev-smartbuddy#implementation',
    liveHref: '/projects/ev-smartbuddy',
    accent: 'from-cyan-500/20 via-sky-500/10 to-transparent'
  },
  {
    slug: 'grocery-management-system',
    name: 'Grocery Management System',
    description:
      'A clean operational dashboard concept for inventory visibility, stock control, and daily store management workflows.',
    features: [
      'Inventory and replenishment overview',
      'Usability-focused reporting panels',
      'Mobile-friendly management interface'
    ],
    stack: ['Excel', 'SQL', 'Python', 'Automation'],
    githubHref: '/projects/grocery-management-system#implementation',
    liveHref: '/projects/grocery-management-system',
    accent: 'from-emerald-500/20 via-lime-500/10 to-transparent'
  },
  {
    slug: 'data-analytics-dashboard',
    name: 'Data Analytics Dashboard',
    description:
      'A polished analytics dashboard that surfaces business performance through compact, readable visual summaries and quick filters.',
    features: [
      'Executive summary cards and charts',
      'Strong hierarchy for fast scanning',
      'Consistent reusable dashboard components'
    ],
    stack: ['Power BI', 'Pandas', 'NumPy', 'Dashboard Design'],
    githubHref: '/projects/data-analytics-dashboard#implementation',
    liveHref: '/projects/data-analytics-dashboard',
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent'
  }
];

export const certifications = [
  {
    title: 'Data Analytics Fundamentals',
    issuer: 'Industry Learning Program',
    year: '2025'
  },
  {
    title: 'SQL for Data Analysis',
    issuer: 'Professional Training Track',
    year: '2025'
  },
  {
    title: 'Power BI Essentials',
    issuer: 'Business Intelligence Pathway',
    year: '2025'
  }
];

export const education = [
  {
    degree: 'Data Analytics Focus',
    school: 'Self-directed and formal learning',
    period: 'Current',
    details:
      'Combining structured study with practical portfolio work to strengthen analysis, reporting, and visualization skills.'
  },
  {
    degree: 'Foundations in Computing and Data',
    school: 'Academic coursework and practice projects',
    period: 'Ongoing',
    details:
      'Building a solid foundation in data handling, spreadsheet modeling, and presentation design.'
  }
];

export const resumeHighlights = [
  'Data-focused portfolio with business-friendly storytelling',
  'Hands-on experience in Python, SQL, Excel, and Power BI',
  'Clean, responsive, recruiter-friendly presentation of work'
];

export const contactChannels = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`
  },
  {
    label: 'LinkedIn',
    value: 'Professional profile',
    href: siteConfig.linkedin
  },
  {
    label: 'GitHub',
    value: 'Code profile',
    href: siteConfig.github
  }
];